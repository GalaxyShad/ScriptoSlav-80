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


type Assembly<T> = T & { assembled?: string }

class Scriptoslav80Compiler extends Scriptoslav80Listener {

  exitNumExpr = (ctx: Assembly<NumExprContext>) => {
    ctx.assembled = `MVI A, ${ctx.getText()}`
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

}

export {Scriptoslav80Compiler};