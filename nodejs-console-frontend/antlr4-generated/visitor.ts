
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
  PrintContext, StmtContext,
  VarDeclContext, WhilestmtContext
} from "./Scriptoslav80Parser";

import {varAssign, varGet, VariableValue, varInit} from "./variableTable";
import Scriptoslav80Listener from "./Scriptoslav80Listener";

type EvaluatedContext<T> = T & { evaluated?: VariableValue }

function getEvaluated(ctx: EvaluatedContext<ExprContext>): VariableValue {
  if (ctx.evaluated === undefined) throw new Error('O_o');

  return ctx.evaluated;
}

function calculate(left: VariableValue, op: string, right: VariableValue): VariableValue {
  if (left.type !== right.type) {
    throw new Error(`No no no, mr Fish, you cannot  ${left.type} '${op}' ${right.type}!`);
  }

  const l = +left.value;
  const r = +right.value;

  const makeBool = (x: boolean) => ({value: +x, type: 'bool'} as VariableValue)
  const makeInt = (x: number) => ({value: x, type: 'i8'} as VariableValue);

  switch (op) {
    // Arithmetic operations
    case '/': {
      if (r === 0) {
        throw new Error('Division by zero :(');
      }

      return makeInt(l / r);
    }
    case '*':
      return makeInt(l * r);
    case '+':
      return makeInt(l + r);
    case '-':
      return makeInt(l - r);

      // Logic operations
    case '==':
      return makeBool(l === r);
    case '!=':
      return makeBool(l !== r);
    case '<':
      return makeBool(l < r);
    case '<=':
      return makeBool(l <= r);
    case '>':
      return makeBool(l > r);
    case '>=':
      return makeBool(l >= r);
  }

  throw new Error('O_o')
}

class TreeWalker extends Scriptoslav80Listener {

  // Variable manipulations
  exitVarDecl = (ctx: VarDeclContext) => {
    const isConst = ctx.MUTABILITY().getText() == 'const';
    const name = ctx.ID().getText();
    const definedAtLine = ctx.ID().symbol.line;

    const value = (ctx.expr() as any).evaluated;

    varInit({isConst, name, definedAtLine}, {...value})
  }

  exitAssignment = (ctx: AssignmentContext) => {
    const name = ctx.ID().getText();

    const value = (ctx.expr() as any).evaluated;

    varAssign(name, {...value})
  }

  exitIdExp = (ctx: EvaluatedContext<IdExpContext>) => {
    ctx.evaluated = varGet(ctx.getText());
  }

  exitNumExpr = (ctx: EvaluatedContext<NumExprContext>) => {
    ctx.evaluated = {
      value: +ctx.getText(),
      type: 'i8'
    } as VariableValue;
  }

  exitParenthesisExpr = (ctx: ParenthesisExprContext) => {
    (ctx as any).evaluated = (ctx.children![1] as any).evaluated;
  }

  // Binary expressions
  exitPlusMinusExpr = (ctx: PlusMinusExprContext) => {
    const left = getEvaluated(ctx._left);
    const right = getEvaluated(ctx._right);

    (ctx as any).evaluated = calculate(left, ctx._op.text, right);
  }

  exitMulDivExpr = (ctx: MulDivExprContext) => {
    const left = getEvaluated(ctx._left);
    const right = getEvaluated(ctx._right);

    (ctx as any).evaluated = calculate(left, ctx._op.text, right);
  }

  exitCompExpr = (ctx: EvaluatedContext<CompExprContext>) => {
    const left = getEvaluated(ctx._left);
    const right = getEvaluated(ctx._right);

    (ctx as any).evaluated = calculate(left, ctx.compOperator().getText(), right);
  }


  // System calls
  exitPrint = (ctx: PrintContext) => {

    const val = getEvaluated(ctx.expr());

    const formatBool = (x: number) => x ? 'true' : 'false';

    const display = val.type === 'bool'
      ? formatBool(val.value)
      : val.value;

    console.log(display)
  }

  enterIfstmt = (ctx: IfstmtContext) => {

    (ctx.stmt() as any).conditionContext = ctx.expr();

    if (ctx.elsestmt() !== null) {
      (ctx.elsestmt().stmt() as any).conditionContext = ctx.expr();
      (ctx.elsestmt().stmt() as any).isConditionInverted = true;
    }
  }

  enterWhilestmt = (ctx: WhilestmtContext) => {
    (ctx.stmt() as any).conditionContext = ctx.expr();
  }

  exitWhilestmt = (ctx: WhilestmtContext) => {
    if (ctx.stmt().getChildCount() !== 0)
      ctx.parentCtx?.children?.push(ctx)
  }

  enterStmt = (ctx: StmtContext) => {
    const cond = (ctx as any).conditionContext?.evaluated as VariableValue | undefined;

    if (cond === undefined) {
      return;
    }

    const c = ((ctx as any).isConditionInverted === true)
      ? cond.value
      : !cond.value;

    if (c) {
      ctx.children = []
    }
  }



}

export {TreeWalker};