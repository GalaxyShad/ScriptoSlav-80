import {
  AssignmentContext,
  CompExprContext,
  ExprContext,
  IdExpContext,
  IfstmtContext,
  MulDivExprContext,
  NumExprContext,
  ParenthesisExprContext,
  PlusMinusExprContext,
  PrintContext, ProgramContext, StmtContext,
  VarDeclContext, WhilestmtContext
} from "./Scriptoslav80Parser";

import {varAssign, varGet, varGetAdr, VariableValue, varInit} from "./variableTable";
import Scriptoslav80Listener from "./Scriptoslav80Listener";


type Assembly<T> = T & {
  assembled?: string,
  type?: 'var' | 'number'
}

const MULT_FUNC = `
  ; Input: D - multiplicand, C - multiplier
  ; Output C/A - result, B - remainder
  
  MULT:   MVI B, 0  ; Initialize most significant byte of result
          MVI E, 9  ; Bit counter
  MULT0:  MOV A, C  ; Rotate least significant bit of 
          RAR       ; multiplier to carry and shift
          MOV C, A  ; low-order byte of result
          DCR E
          RZ        ; Exit if complete
          MOV A, B
          JNC MULT1
          ADD D     ; Add multiplicand to high-
                    ; order byte of result if bit was a one
  MULT1:  RAR       ; Carry=0 here; shift high-order byte of result
          MOV B, A
          JMP MULT0
`;

const DIV_FUNC = `
  DIV:    MVI E, 9  ; Bit counter
          MOV A, B
  DIV0:   MOV B, A
          MOV A, C  ; Rotate carry into C register; rotate next most significant bit to carry
          MOV C, A
          DCR E
          JZ  DIV2
          MOV A, B
          RAL
          JNC DIV1
          SUB D
          JMP DIV0
  DIV1:   SUB B     ; Subtract divisor. If less than high-order quotient, loop
          JNC DIV0
          ADD D
          JMP DIV0
  DIV2:   RAL
          MOV E, A
          MVI A, 0FFh ; Compliment the quotient
          XRA C
          MOV C, A
          MOV A, E
          RAR
`


function procPlus(left: Assembly<ExprContext>, right: Assembly<ExprContext>) {
  if (left.type === 'number' && right.type === 'number') {
    return `
          ${left.assembled}
          ADI ${right.getText()}
        `
  } else if (right.type === 'number') {
    return `
          ${left.assembled}
          ADI ${right.getText()}
        `
  } else if (left.type === 'number' && right.type === 'var') {
    return `
          ${right.assembled}
          ADI ${left.getText()}
        `
  } else if (right.type === 'var') {
    return `
          ${left.assembled}
          MOV B, A
          ${right.assembled}
          ADD B
        `
  } else {
    throw new Error('What? O_o')

  }
}

class Scriptoslav80Compiler extends Scriptoslav80Listener {

  exitNumExpr = (ctx: Assembly<NumExprContext>) => {
    ctx.assembled = `MVI A, ${ctx.getText()}`
    ctx.type = 'number';
  }

  exitIdExp = (ctx: Assembly<IdExpContext>) => {
    const varAdr = varGetAdr(ctx.getText())?.toString(16)
    ctx.assembled = `LDA 0${varAdr}h`
    ctx.type = 'var';
  }

  exitVarDecl = (ctx: Assembly<VarDeclContext>) => {
    const isConst = ctx.MUTABILITY().getText() == 'const';
    const name = ctx.ID().getText();
    const definedAtLine = ctx.ID().symbol.line;

    const value = (ctx.expr() as any).evaluated ?? 0;

    varInit({isConst, name, definedAtLine}, {...value})

    const exprAssembled = (ctx.expr() as any).assembled;

    ctx.assembled = `
      ${exprAssembled}
      STA 0${varGetAdr(name)?.toString(16)}h    ; var ${name}`
  }

  exitStmt = (ctx: Assembly<StmtContext>) => {
    ctx.assembled = ctx.children?.map(x => (x as any).assembled).join('')
  }

  exitProgram = (ctx: Assembly<ProgramContext>) => {
    const asm = ctx.children?.map(x => (x as any).assembled).join('')

    console.log(asm)
  }

  exitPlusMinusExpr = (ctx: Assembly<PlusMinusExprContext>) => {
    const left = ctx._left as Assembly<ExprContext>;
    const right = ctx._right as Assembly<ExprContext>;

    if (ctx._op.text === '+') {
      ctx.assembled = procPlus(left, right);
    } else {

    }
  }

}

export {Scriptoslav80Compiler};