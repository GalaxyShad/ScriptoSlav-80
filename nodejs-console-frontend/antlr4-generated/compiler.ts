import {
  AssignmentContext, BlockstmtContext,
  CompExprContext, CompOperatorContext,
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

type CompareToken = '==' | '!=' | '>' | '>=' | '<' | '<=';

type Assembly<T> = T & {
  assembled?: string,
  compareToken?: CompareToken,
  type?: 'var' | 'number'
}

const MULT_FUNC = `
  ; Input: D - multiplicand, C - multiplier
  ; Output C/A - result, H - remainder
  
  MULT:   MVI H, 0  ; Initialize most significant byte of result
          MVI E, 9  ; Bit counter
  MULT0:  MOV A, C  ; Rotate least significant bit of 
          RAR       ; multiplier to carry and shift
          MOV C, A  ; low-order byte of result
          DCR E
          RZ        ; Exit if complete
          MOV A, H
          JNC MULT1
          ADD D     ; Add multiplicand to high-
                    ; order byte of result if bit was a one
  MULT1:  RAR       ; Carry=0 here; shift high-order byte of result
          MOV H, A
          JMP MULT0
`;

const DIV_FUNC = `
  ; Input: H - MSB dividend, C - LSB - dividend, D - divisor  
  ; Output: C - quotient, H - remainder

  DIV:    MVI E, 9  ; Bit counter
          MOV A, H
  DIV0:   MOV H, A
          MOV A, C  ; Rotate carry into C register; rotate next most significant bit to carry
          RAL
          MOV C, A
          DCR E
          JZ  DIV2
          MOV A, H
          RAL
          JNC DIV1
          SUB D
          JMP DIV0
  DIV1:   SUB D     ; Subtract divisor. If less than high-order quotient, loop
          JNC DIV0
          ADD D
          JMP DIV0
  DIV2:   RAL
          MOV E, A
          MVI A, 0FFh ; Compliment the quotient
          XRA C
          MOV C, A
          RET
`

function Asm() {
  type Register =
    'A' | 'M' |
    'B' | 'C' |
    'D' | 'E' |
    'H' | 'L';

  const tab = '  ';

  let isHaveDiv = false;
  let isHaveMul = false;

  const additionalRoutines = [] as string[];

  const i8080Instructions = {
    adi: (x: number) => tab +
      `ADI ${x}`,
    add: (x: Register) => tab +
      `ADD ${x}`,
    sbi: (x: number) => tab +
      `SBI ${x}`,
    sub: (x: Register) => tab +
      `SUB ${x}`,
    mov: (dst: Register, src: Register) => tab +
      `MOV ${dst}, ${src}`,
    mvi: (dst: Register, val: number) => tab +
      `MVI ${dst}, ${val}`,
    lda: (adr: number) => tab +
      `LDA ${adr}`,
    sta: (adr: number) => tab +
      `STA ${adr}`,
    cmp: (x: Register) => tab +
      `CMP ${x}`,

    jmp: (l: string) => tab +
      `JMP ${l}`,
    jc: (l: string) => tab +
      `JC ${l}`,
    jnc: (l: string) => tab +
      `JNC ${l}`,
    jz: (l: string) => tab +
      `JZ ${l}`,
    jnz: (l: string) => tab +
      `JNZ ${l}`,

    call: (adr: number) => tab +
      `CALL ${adr}`,
    callLabel: (label: string) => tab +
      `CALL ${label}`,
  }

  const appendDiv = () => {
    if (isHaveDiv) return;

    additionalRoutines.push(DIV_FUNC);
    isHaveDiv = true;
  }

  const appendMultiply = () => {
    if (isHaveMul) return;

    additionalRoutines.push(MULT_FUNC);
    isHaveMul = true;
  }

  const asm = (s: string[]) => s.join('\n')

  const sugarInstructions = {
    div: (x: Register) => {
      appendDiv();

      const {callLabel, mov, mvi} = i8080Instructions;

      return tab + asm([
        mov('C', 'A'),
        mvi('H', 0),
        mov('D', x),
        callLabel('DIV')
      ])
    },

    divi: (x: number) => {
      appendDiv();

      const {callLabel, mvi} = i8080Instructions;

      return tab + asm([
        mov('C', 'A'),
        mvi('H', 0),
        mvi('D', x),
        callLabel('DIV')
      ])
    },

    mult: (x: Register) => {
      appendMultiply();

      const {callLabel, mov} = i8080Instructions;

      return tab + asm([
        mov('C', 'A'),
        mov('D', x),
        callLabel('MULT')
      ])
    },

    multi: (x: number) => {
      appendMultiply();

      const {callLabel, mov, mvi} = i8080Instructions;

      return tab + asm([
        mov('C', 'A'),
        mvi('D', x),
        callLabel('MULT')
      ])
    }
  }

  let labelCount = 0;
  const allocLabel = () => {
    return 'M' + labelCount++;
  }

  return {
    ...i8080Instructions,
    ...sugarInstructions,

    asm,
    allocLabel,
    additionalRoutines
  }
}

const form = (x: CompareToken, a: string, whileLabel?: string, exitLabel?: string) => {
  const trueLabel = allocLabel();
  const falseLabel = allocLabel();

  switch (x) {
    case '==':
      return asm([
        jz(trueLabel),
        jmp(falseLabel),

        trueLabel + ':',
        a,
        exitLabel ? jmp(exitLabel) : '',
        whileLabel ? jmp(whileLabel) : '',
        falseLabel + ':'
      ])
    case '!=':
      return asm([
        jnz(trueLabel),
        jmp(falseLabel),

        trueLabel + ':',
        a,
        exitLabel ? jmp(exitLabel) : '',
        whileLabel ? jmp(whileLabel) : '',
        falseLabel + ':'
      ])

    case '<':
      return asm([
        jc(trueLabel),
        jmp(falseLabel),

        trueLabel + ':',
        a,
        exitLabel ? jmp(exitLabel) : '',
        whileLabel ? jmp(whileLabel) : '',
        falseLabel + ':'
      ])
    case '>':
      return asm([
        jnc(trueLabel),
        jmp(falseLabel),

        trueLabel + ':',
        a,
        exitLabel ? jmp(exitLabel) : '',
        whileLabel ? jmp(whileLabel) : '',
        falseLabel + ':'
      ])

    case '<=':
      return asm([
        jnc(falseLabel),

        trueLabel + ':',
        a,
        exitLabel ? jmp(exitLabel) : '',
        whileLabel ? jmp(whileLabel) : '',
        falseLabel + ':'
      ])
    case '>=':
      return asm([
        jc(falseLabel),

        trueLabel + ':',
        a,
        exitLabel ? jmp(exitLabel) : '',
        whileLabel ? jmp(whileLabel) : '',
        falseLabel + ':'
      ])
  }
}


const {
  adi, asm, mov, add, sub, sbi, lda, sta, mvi, mult, multi, div, divi, cmp,
  jmp, jnz, jz, jc, jnc,
  allocLabel,
  additionalRoutines
} = Asm();


function procPlus(left: Assembly<ExprContext>, right: Assembly<ExprContext>) {
  if (right.type === 'number') {
    const rnum = +right.getText();

    return asm([
      left.assembled!,
      adi(rnum)
    ])
  }

  if (left.type === 'number' && right.type === 'var') {
    const lnum = +left.getText();

    return asm([
      right.assembled!,
      adi(lnum)
    ]);
  }


  return asm([
    left.assembled!,
    mov('B', 'A'),
    right.assembled!,
    add('B')
  ]);

  throw new Error('What? O_o')
}

function procMultiply(left: Assembly<ExprContext>, right: Assembly<ExprContext>) {
  if (right.type === 'number') {
    const rnum = +right.getText();

    return asm([
      left.assembled!,
      multi(rnum)
    ])
  }

  if (left.type === 'number' && right.type === 'var') {
    const lnum = +left.getText();

    return asm([
      right.assembled!,
      multi(lnum)
    ]);
  }


  return asm([
    left.assembled!,
    mov('B', 'A'),
    right.assembled!,
    mult('B')
  ]);

  throw new Error('What? O_o')
}

function procMinus(left: Assembly<ExprContext>, right: Assembly<ExprContext>) {
  if (right.type === 'number') {
    return asm([
      left.assembled!,
      sbi(+right.getText())
    ]);
  }

  return asm([
    left.assembled!,
    mov('B', 'A'),
    right.assembled!,
    mov('C', 'A'),
    mov('A', 'B'),
    sub('C')
  ]);
}

function procDiv(left: Assembly<ExprContext>, right: Assembly<ExprContext>) {
  if (right.type === 'number') {
    return asm([
      left.assembled!,
      divi(+right.getText())
    ]);
  }

  return asm([
    left.assembled!,
    mov('B', 'A'),
    right.assembled!,
    mov('C', 'A'),
    mov('A', 'B'),
    div('C')
  ]);
}

function procCompare(left: Assembly<ExprContext>, right: Assembly<ExprContext>) {
  return asm([
    right.assembled!,
    mov('B', 'A'),
    left.assembled!,
    cmp('B')
  ])
}


class Scriptoslav80Compiler extends Scriptoslav80Listener {

  exitNumExpr = (ctx: Assembly<NumExprContext>) => {
    ctx.assembled = asm([
      mvi('A', +ctx.getText())
    ]);
    ctx.type = 'number';
  }

  exitIdExp = (ctx: Assembly<IdExpContext>) => {
    const varAdr = varGetAdr(ctx.getText())!
    ctx.assembled = asm([
      lda(varAdr)
    ]);
    ctx.type = 'var';
  }

  exitVarDecl = (ctx: Assembly<VarDeclContext>) => {
    const isConst = ctx.MUTABILITY().getText() === 'const';
    const name = ctx.ID().getText();
    const definedAtLine = ctx.ID().symbol.line;

    const value = (ctx.expr() as any).evaluated ?? 0;

    varInit({isConst, name, definedAtLine}, {...value})

    const exprAssembled = (ctx.expr() as any).assembled;

    const varAdr = varGetAdr(name)!;

    ctx.assembled = asm([
      exprAssembled,
      sta(varAdr) + '   ; var ' + name
    ])
  }

  exitAssignment = (ctx: Assembly<AssignmentContext>) => {
    const name = ctx.ID().getText();

    const exprAssembled = (ctx.expr() as any).assembled;

    const varAdr = varGetAdr(name)!;

    ctx.assembled = asm([
      exprAssembled,
      sta(varAdr) + '   ; var ' + name
    ])
  }

  exitStmt = (ctx: Assembly<StmtContext>) => {
    ctx.assembled = ctx.children?.map(x => (x as any).assembled).join('\n')
  }

  exitProgram = (ctx: Assembly<ProgramContext>) => {
    const asm = ctx.children?.map(x => (x as any).assembled).join('\n')

    console.log(
      ` ORG 0C00h
        ${asm}
        RST 1
        
        ${additionalRoutines.join('\n\n')}
      `
    )
  }

  exitPlusMinusExpr = (ctx: Assembly<PlusMinusExprContext>) => {
    const left = ctx._left as Assembly<ExprContext>;
    const right = ctx._right as Assembly<ExprContext>;

    const func = (ctx._op.text === '+') ? procPlus : procMinus;

    ctx.assembled = func(left, right);
  }

  exitMulDivExpr = (ctx: Assembly<MulDivExprContext>) => {
    const left = ctx._left as Assembly<ExprContext>;
    const right = ctx._right as Assembly<ExprContext>;

    const func = (ctx._op.text === '*') ? procMultiply : procDiv;

    ctx.assembled = func(left, right);
  }

  exitParenthesisExpr = (ctx: Assembly<ParenthesisExprContext>) => {
    ctx.assembled = (ctx.expr() as Assembly<ExprContext>).assembled;
  }

  exitBlockstmt = (ctx: Assembly<BlockstmtContext>) => {
    ctx.assembled = ctx.children?.map(x => (x as any).assembled).join('\n')
  }

  exitCompExpr = (ctx: Assembly<CompExprContext>) => {
    const left = ctx._left as Assembly<ExprContext>;
    const right = ctx._right as Assembly<ExprContext>;

    ctx.assembled = procCompare(left, right);
    ctx.compareToken = ctx.getChild(1).getText() as CompareToken;
  }

  exitIfstmt = (ctx: Assembly<IfstmtContext>) => {
    const condNode = ctx.expr() as Assembly<ExprContext>;
    const bodyNode = ctx.stmt() as Assembly<StmtContext>;

    const elseBlock = ctx.elsestmt()?.stmt() as Assembly<ExprContext>;

    const finishLabel = (elseBlock) ? allocLabel() : undefined;

    ctx.assembled = asm([
      condNode.assembled!,
      form(condNode.compareToken!, bodyNode.assembled!, undefined, finishLabel),
      finishLabel ? finishLabel + ':' : ''

    ])
  }

  exitWhilestmt = (ctx: Assembly<WhilestmtContext>) => {
    const condNode = ctx.expr() as Assembly<ExprContext>;
    const bodyNode = ctx.stmt() as Assembly<StmtContext>;

    const whileLabel = allocLabel();

    ctx.assembled = asm([
      whileLabel + ':',
      condNode.assembled!,
      form(condNode.compareToken!, bodyNode.assembled!, whileLabel)
    ])
  }
}

export {Scriptoslav80Compiler};