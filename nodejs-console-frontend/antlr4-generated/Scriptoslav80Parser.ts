// Generated from Scriptoslav80.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import Scriptoslav80Listener from "./Scriptoslav80Listener";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class Scriptoslav80Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly MUTABILITY = 10;
	public static readonly ID = 11;
	public static readonly NUM = 12;
	public static readonly ASTERISK = 13;
	public static readonly SLASH = 14;
	public static readonly PLUS = 15;
	public static readonly MINUS = 16;
	public static readonly ASSIGN = 17;
	public static readonly EQUAL = 18;
	public static readonly NOT_EQUAL = 19;
	public static readonly LESS = 20;
	public static readonly LESS_OR_EQUAL = 21;
	public static readonly GREATER = 22;
	public static readonly GREATER_OR_EQUAL = 23;
	public static readonly SPACE = 24;
	public static readonly LINE_COMMENT = 25;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_varDecl = 3;
	public static readonly RULE_assignment = 4;
	public static readonly RULE_compOperator = 5;
	public static readonly RULE_print = 6;
	public static readonly RULE_blockstmt = 7;
	public static readonly RULE_ifstmt = 8;
	public static readonly RULE_elsestmt = 9;
	public static readonly RULE_whilestmt = 10;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "';'", 
                                                            "'monitor.log'", 
                                                            "'{'", "'}'", 
                                                            "'if'", "'else'", 
                                                            "'while'", null, 
                                                            null, null, 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'", 
                                                            "'='", "'=='", 
                                                            "'!='", "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "MUTABILITY", 
                                                             "ID", "NUM", 
                                                             "ASTERISK", 
                                                             "SLASH", "PLUS", 
                                                             "MINUS", "ASSIGN", 
                                                             "EQUAL", "NOT_EQUAL", 
                                                             "LESS", "LESS_OR_EQUAL", 
                                                             "GREATER", 
                                                             "GREATER_OR_EQUAL", 
                                                             "SPACE", "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stmt", "expr", "varDecl", "assignment", "compOperator", "print", 
		"blockstmt", "ifstmt", "elsestmt", "whilestmt",
	];
	public get grammarFileName(): string { return "Scriptoslav80.g4"; }
	public get literalNames(): (string | null)[] { return Scriptoslav80Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return Scriptoslav80Parser.symbolicNames; }
	public get ruleNames(): string[] { return Scriptoslav80Parser.ruleNames; }
	public get serializedATN(): number[] { return Scriptoslav80Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Scriptoslav80Parser._ATN, Scriptoslav80Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Scriptoslav80Parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3760) !== 0)) {
				{
				{
				this.state = 22;
				this.stmt();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this.match(Scriptoslav80Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Scriptoslav80Parser.RULE_stmt);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 30;
				this.varDecl();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 31;
				this.assignment();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 32;
				this.print();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 33;
				this.ifstmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 34;
				this.blockstmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 35;
				this.whilestmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, Scriptoslav80Parser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				{
				localctx = new ParenthesisExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 39;
				this.match(Scriptoslav80Parser.T__0);
				this.state = 40;
				this.expr(0);
				this.state = 41;
				this.match(Scriptoslav80Parser.T__1);
				}
				break;
			case 11:
				{
				localctx = new IdExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 43;
				this.match(Scriptoslav80Parser.ID);
				}
				break;
			case 12:
				{
				localctx = new NumExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 44;
				this.match(Scriptoslav80Parser.NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 59;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 57;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as MulDivExprContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, Scriptoslav80Parser.RULE_expr);
						this.state = 47;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 48;
						(localctx as MulDivExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===13 || _la===14)) {
						    (localctx as MulDivExprContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 49;
						(localctx as MulDivExprContext)._right = this.expr(6);
						}
						break;
					case 2:
						{
						localctx = new PlusMinusExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as PlusMinusExprContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, Scriptoslav80Parser.RULE_expr);
						this.state = 50;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 51;
						(localctx as PlusMinusExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===15 || _la===16)) {
						    (localctx as PlusMinusExprContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 52;
						(localctx as PlusMinusExprContext)._right = this.expr(5);
						}
						break;
					case 3:
						{
						localctx = new CompExprContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as CompExprContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, Scriptoslav80Parser.RULE_expr);
						this.state = 53;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 54;
						this.compOperator();
						this.state = 55;
						(localctx as CompExprContext)._right = this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let localctx: VarDeclContext = new VarDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, Scriptoslav80Parser.RULE_varDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.match(Scriptoslav80Parser.MUTABILITY);
			this.state = 63;
			this.match(Scriptoslav80Parser.ID);
			this.state = 64;
			this.match(Scriptoslav80Parser.ASSIGN);
			this.state = 65;
			this.expr(0);
			this.state = 66;
			this.match(Scriptoslav80Parser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Scriptoslav80Parser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(Scriptoslav80Parser.ID);
			this.state = 69;
			this.match(Scriptoslav80Parser.ASSIGN);
			this.state = 70;
			this.expr(0);
			this.state = 71;
			this.match(Scriptoslav80Parser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compOperator(): CompOperatorContext {
		let localctx: CompOperatorContext = new CompOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, Scriptoslav80Parser.RULE_compOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16515072) !== 0))) {
			    localctx._op = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let localctx: PrintContext = new PrintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Scriptoslav80Parser.RULE_print);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(Scriptoslav80Parser.T__3);
			this.state = 76;
			this.match(Scriptoslav80Parser.T__0);
			this.state = 77;
			this.expr(0);
			this.state = 78;
			this.match(Scriptoslav80Parser.T__1);
			this.state = 79;
			this.match(Scriptoslav80Parser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockstmt(): BlockstmtContext {
		let localctx: BlockstmtContext = new BlockstmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, Scriptoslav80Parser.RULE_blockstmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this.match(Scriptoslav80Parser.T__4);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3760) !== 0)) {
				{
				{
				this.state = 82;
				this.stmt();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this.match(Scriptoslav80Parser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifstmt(): IfstmtContext {
		let localctx: IfstmtContext = new IfstmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, Scriptoslav80Parser.RULE_ifstmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this.match(Scriptoslav80Parser.T__6);
			this.state = 91;
			this.match(Scriptoslav80Parser.T__0);
			this.state = 92;
			this.expr(0);
			this.state = 93;
			this.match(Scriptoslav80Parser.T__1);
			this.state = 94;
			this.stmt();
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 95;
				this.elsestmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elsestmt(): ElsestmtContext {
		let localctx: ElsestmtContext = new ElsestmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, Scriptoslav80Parser.RULE_elsestmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(Scriptoslav80Parser.T__7);
			this.state = 99;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whilestmt(): WhilestmtContext {
		let localctx: WhilestmtContext = new WhilestmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Scriptoslav80Parser.RULE_whilestmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.match(Scriptoslav80Parser.T__8);
			this.state = 102;
			this.match(Scriptoslav80Parser.T__0);
			this.state = 103;
			this.expr(0);
			this.state = 104;
			this.match(Scriptoslav80Parser.T__1);
			this.state = 105;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,25,108,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,5,0,24,8,0,10,0,12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
	3,1,37,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,46,8,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,5,2,58,8,2,10,2,12,2,61,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
	4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,84,8,7,10,
	7,12,7,87,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,97,8,8,1,9,1,9,1,9,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,0,1,4,11,0,2,4,6,8,10,12,14,16,18,20,0,
	3,1,0,13,14,1,0,15,16,1,0,18,23,109,0,25,1,0,0,0,2,36,1,0,0,0,4,45,1,0,
	0,0,6,62,1,0,0,0,8,68,1,0,0,0,10,73,1,0,0,0,12,75,1,0,0,0,14,81,1,0,0,0,
	16,90,1,0,0,0,18,98,1,0,0,0,20,101,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,
	24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,
	29,5,0,0,1,29,1,1,0,0,0,30,37,3,6,3,0,31,37,3,8,4,0,32,37,3,12,6,0,33,37,
	3,16,8,0,34,37,3,14,7,0,35,37,3,20,10,0,36,30,1,0,0,0,36,31,1,0,0,0,36,
	32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,3,1,0,0,0,38,39,
	6,2,-1,0,39,40,5,1,0,0,40,41,3,4,2,0,41,42,5,2,0,0,42,46,1,0,0,0,43,46,
	5,11,0,0,44,46,5,12,0,0,45,38,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,59,
	1,0,0,0,47,48,10,5,0,0,48,49,7,0,0,0,49,58,3,4,2,6,50,51,10,4,0,0,51,52,
	7,1,0,0,52,58,3,4,2,5,53,54,10,3,0,0,54,55,3,10,5,0,55,56,3,4,2,4,56,58,
	1,0,0,0,57,47,1,0,0,0,57,50,1,0,0,0,57,53,1,0,0,0,58,61,1,0,0,0,59,57,1,
	0,0,0,59,60,1,0,0,0,60,5,1,0,0,0,61,59,1,0,0,0,62,63,5,10,0,0,63,64,5,11,
	0,0,64,65,5,17,0,0,65,66,3,4,2,0,66,67,5,3,0,0,67,7,1,0,0,0,68,69,5,11,
	0,0,69,70,5,17,0,0,70,71,3,4,2,0,71,72,5,3,0,0,72,9,1,0,0,0,73,74,7,2,0,
	0,74,11,1,0,0,0,75,76,5,4,0,0,76,77,5,1,0,0,77,78,3,4,2,0,78,79,5,2,0,0,
	79,80,5,3,0,0,80,13,1,0,0,0,81,85,5,5,0,0,82,84,3,2,1,0,83,82,1,0,0,0,84,
	87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,0,0,88,89,
	5,6,0,0,89,15,1,0,0,0,90,91,5,7,0,0,91,92,5,1,0,0,92,93,3,4,2,0,93,94,5,
	2,0,0,94,96,3,2,1,0,95,97,3,18,9,0,96,95,1,0,0,0,96,97,1,0,0,0,97,17,1,
	0,0,0,98,99,5,8,0,0,99,100,3,2,1,0,100,19,1,0,0,0,101,102,5,9,0,0,102,103,
	5,1,0,0,103,104,3,4,2,0,104,105,5,2,0,0,105,106,3,2,1,0,106,21,1,0,0,0,
	7,25,36,45,57,59,85,96];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Scriptoslav80Parser.__ATN) {
			Scriptoslav80Parser.__ATN = new ATNDeserializer().deserialize(Scriptoslav80Parser._serializedATN);
		}

		return Scriptoslav80Parser.__ATN;
	}


	static DecisionsToDFA = Scriptoslav80Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.EOF, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_program;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDecl(): VarDeclContext {
		return this.getTypedRuleContext(VarDeclContext, 0) as VarDeclContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public print(): PrintContext {
		return this.getTypedRuleContext(PrintContext, 0) as PrintContext;
	}
	public ifstmt(): IfstmtContext {
		return this.getTypedRuleContext(IfstmtContext, 0) as IfstmtContext;
	}
	public blockstmt(): BlockstmtContext {
		return this.getTypedRuleContext(BlockstmtContext, 0) as BlockstmtContext;
	}
	public whilestmt(): WhilestmtContext {
		return this.getTypedRuleContext(WhilestmtContext, 0) as WhilestmtContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_stmt;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_expr;
	}
	public override copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpContext extends ExprContext {
	constructor(parser: Scriptoslav80Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.ID, 0);
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterIdExp) {
	 		listener.enterIdExp(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitIdExp) {
	 		listener.exitIdExp(this);
		}
	}
}
export class CompExprContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: Scriptoslav80Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public compOperator(): CompOperatorContext {
		return this.getTypedRuleContext(CompOperatorContext, 0) as CompOperatorContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterCompExpr) {
	 		listener.enterCompExpr(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitCompExpr) {
	 		listener.exitCompExpr(this);
		}
	}
}
export class PlusMinusExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	constructor(parser: Scriptoslav80Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.MINUS, 0);
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterPlusMinusExpr) {
	 		listener.enterPlusMinusExpr(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitPlusMinusExpr) {
	 		listener.exitPlusMinusExpr(this);
		}
	}
}
export class ParenthesisExprContext extends ExprContext {
	constructor(parser: Scriptoslav80Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterParenthesisExpr) {
	 		listener.enterParenthesisExpr(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitParenthesisExpr) {
	 		listener.exitParenthesisExpr(this);
		}
	}
}
export class MulDivExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	constructor(parser: Scriptoslav80Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.SLASH, 0);
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterMulDivExpr) {
	 		listener.enterMulDivExpr(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitMulDivExpr) {
	 		listener.exitMulDivExpr(this);
		}
	}
}
export class NumExprContext extends ExprContext {
	constructor(parser: Scriptoslav80Parser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUM(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.NUM, 0);
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterNumExpr) {
	 		listener.enterNumExpr(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitNumExpr) {
	 		listener.exitNumExpr(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MUTABILITY(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.MUTABILITY, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.ID, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.ASSIGN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_varDecl;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterVarDecl) {
	 		listener.enterVarDecl(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitVarDecl) {
	 		listener.exitVarDecl(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.ID, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.ASSIGN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_assignment;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
}


export class CompOperatorContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.LESS, 0);
	}
	public LESS_OR_EQUAL(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.LESS_OR_EQUAL, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.NOT_EQUAL, 0);
	}
	public GREATER(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.GREATER, 0);
	}
	public GREATER_OR_EQUAL(): TerminalNode {
		return this.getToken(Scriptoslav80Parser.GREATER_OR_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_compOperator;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterCompOperator) {
	 		listener.enterCompOperator(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitCompOperator) {
	 		listener.exitCompOperator(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_print;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterPrint) {
	 		listener.enterPrint(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitPrint) {
	 		listener.exitPrint(this);
		}
	}
}


export class BlockstmtContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_blockstmt;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterBlockstmt) {
	 		listener.enterBlockstmt(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitBlockstmt) {
	 		listener.exitBlockstmt(this);
		}
	}
}


export class IfstmtContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
	public elsestmt(): ElsestmtContext {
		return this.getTypedRuleContext(ElsestmtContext, 0) as ElsestmtContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_ifstmt;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterIfstmt) {
	 		listener.enterIfstmt(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitIfstmt) {
	 		listener.exitIfstmt(this);
		}
	}
}


export class ElsestmtContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_elsestmt;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterElsestmt) {
	 		listener.enterElsestmt(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitElsestmt) {
	 		listener.exitElsestmt(this);
		}
	}
}


export class WhilestmtContext extends ParserRuleContext {
	constructor(parser?: Scriptoslav80Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
    public get ruleIndex(): number {
    	return Scriptoslav80Parser.RULE_whilestmt;
	}
	public enterRule(listener: Scriptoslav80Listener): void {
	    if(listener.enterWhilestmt) {
	 		listener.enterWhilestmt(this);
		}
	}
	public exitRule(listener: Scriptoslav80Listener): void {
	    if(listener.exitWhilestmt) {
	 		listener.exitWhilestmt(this);
		}
	}
}
