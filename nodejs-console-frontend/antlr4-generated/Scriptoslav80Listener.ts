// Generated from Scriptoslav80.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./Scriptoslav80Parser";
import { StmtContext } from "./Scriptoslav80Parser";
import { IdExpContext } from "./Scriptoslav80Parser";
import { CompExprContext } from "./Scriptoslav80Parser";
import { PlusMinusExprContext } from "./Scriptoslav80Parser";
import { ParenthesisExprContext } from "./Scriptoslav80Parser";
import { MulDivExprContext } from "./Scriptoslav80Parser";
import { NumExprContext } from "./Scriptoslav80Parser";
import { VarDeclContext } from "./Scriptoslav80Parser";
import { AssignmentContext } from "./Scriptoslav80Parser";
import { CompOperatorContext } from "./Scriptoslav80Parser";
import { PrintContext } from "./Scriptoslav80Parser";
import { BlockstmtContext } from "./Scriptoslav80Parser";
import { IfstmtContext } from "./Scriptoslav80Parser";
import { ElsestmtContext } from "./Scriptoslav80Parser";
import { WhilestmtContext } from "./Scriptoslav80Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Scriptoslav80Parser`.
 */
export default class Scriptoslav80Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;
	/**
	 * Enter a parse tree produced by the `idExp`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdExp?: (ctx: IdExpContext) => void;
	/**
	 * Exit a parse tree produced by the `idExp`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdExp?: (ctx: IdExpContext) => void;
	/**
	 * Enter a parse tree produced by the `compExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterCompExpr?: (ctx: CompExprContext) => void;
	/**
	 * Exit a parse tree produced by the `compExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitCompExpr?: (ctx: CompExprContext) => void;
	/**
	 * Enter a parse tree produced by the `plusMinusExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterPlusMinusExpr?: (ctx: PlusMinusExprContext) => void;
	/**
	 * Exit a parse tree produced by the `plusMinusExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitPlusMinusExpr?: (ctx: PlusMinusExprContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesisExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpr?: (ctx: ParenthesisExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpr?: (ctx: ParenthesisExprContext) => void;
	/**
	 * Enter a parse tree produced by the `mulDivExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDivExpr?: (ctx: MulDivExprContext) => void;
	/**
	 * Exit a parse tree produced by the `mulDivExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDivExpr?: (ctx: MulDivExprContext) => void;
	/**
	 * Enter a parse tree produced by the `numExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterNumExpr?: (ctx: NumExprContext) => void;
	/**
	 * Exit a parse tree produced by the `numExpr`
	 * labeled alternative in `Scriptoslav80Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitNumExpr?: (ctx: NumExprContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.compOperator`.
	 * @param ctx the parse tree
	 */
	enterCompOperator?: (ctx: CompOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.compOperator`.
	 * @param ctx the parse tree
	 */
	exitCompOperator?: (ctx: CompOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.blockstmt`.
	 * @param ctx the parse tree
	 */
	enterBlockstmt?: (ctx: BlockstmtContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.blockstmt`.
	 * @param ctx the parse tree
	 */
	exitBlockstmt?: (ctx: BlockstmtContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.ifstmt`.
	 * @param ctx the parse tree
	 */
	enterIfstmt?: (ctx: IfstmtContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.ifstmt`.
	 * @param ctx the parse tree
	 */
	exitIfstmt?: (ctx: IfstmtContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.elsestmt`.
	 * @param ctx the parse tree
	 */
	enterElsestmt?: (ctx: ElsestmtContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.elsestmt`.
	 * @param ctx the parse tree
	 */
	exitElsestmt?: (ctx: ElsestmtContext) => void;
	/**
	 * Enter a parse tree produced by `Scriptoslav80Parser.whilestmt`.
	 * @param ctx the parse tree
	 */
	enterWhilestmt?: (ctx: WhilestmtContext) => void;
	/**
	 * Exit a parse tree produced by `Scriptoslav80Parser.whilestmt`.
	 * @param ctx the parse tree
	 */
	exitWhilestmt?: (ctx: WhilestmtContext) => void;
}

