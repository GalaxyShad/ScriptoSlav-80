// Generated from Scriptoslav80.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class Scriptoslav80Lexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"MUTABILITY", "ID", "NUM", "ASTERISK", "SLASH", "PLUS", "MINUS", "ASSIGN", 
		"EQUAL", "NOT_EQUAL", "LESS", "LESS_OR_EQUAL", "GREATER", "GREATER_OR_EQUAL", 
		"SPACE", "LINE_COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, Scriptoslav80Lexer._ATN, Scriptoslav80Lexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Scriptoslav80.g4"; }

	public get literalNames(): (string | null)[] { return Scriptoslav80Lexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return Scriptoslav80Lexer.symbolicNames; }
	public get ruleNames(): string[] { return Scriptoslav80Lexer.ruleNames; }

	public get serializedATN(): number[] { return Scriptoslav80Lexer._serializedATN; }

	public get channelNames(): string[] { return Scriptoslav80Lexer.channelNames; }

	public get modeNames(): string[] { return Scriptoslav80Lexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,25,153,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
	8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,96,8,9,1,10,1,10,5,10,100,
	8,10,10,10,12,10,103,9,10,1,11,4,11,106,8,11,11,11,12,11,107,1,12,1,12,
	1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,
	19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,23,4,23,137,8,23,11,23,
	12,23,138,1,23,1,23,1,24,1,24,1,24,1,24,5,24,147,8,24,10,24,12,24,150,9,
	24,1,24,1,24,0,0,25,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,
	23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,
	47,24,49,25,1,0,5,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,
	0,48,57,3,0,9,10,13,13,32,32,2,0,10,10,13,13,157,0,1,1,0,0,0,0,3,1,0,0,
	0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
	0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
	0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
	0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,
	0,49,1,0,0,0,1,51,1,0,0,0,3,53,1,0,0,0,5,55,1,0,0,0,7,57,1,0,0,0,9,69,1,
	0,0,0,11,71,1,0,0,0,13,73,1,0,0,0,15,76,1,0,0,0,17,81,1,0,0,0,19,95,1,0,
	0,0,21,97,1,0,0,0,23,105,1,0,0,0,25,109,1,0,0,0,27,111,1,0,0,0,29,113,1,
	0,0,0,31,115,1,0,0,0,33,117,1,0,0,0,35,119,1,0,0,0,37,122,1,0,0,0,39,125,
	1,0,0,0,41,127,1,0,0,0,43,130,1,0,0,0,45,132,1,0,0,0,47,136,1,0,0,0,49,
	142,1,0,0,0,51,52,5,40,0,0,52,2,1,0,0,0,53,54,5,41,0,0,54,4,1,0,0,0,55,
	56,5,59,0,0,56,6,1,0,0,0,57,58,5,109,0,0,58,59,5,111,0,0,59,60,5,110,0,
	0,60,61,5,105,0,0,61,62,5,116,0,0,62,63,5,111,0,0,63,64,5,114,0,0,64,65,
	5,46,0,0,65,66,5,108,0,0,66,67,5,111,0,0,67,68,5,103,0,0,68,8,1,0,0,0,69,
	70,5,123,0,0,70,10,1,0,0,0,71,72,5,125,0,0,72,12,1,0,0,0,73,74,5,105,0,
	0,74,75,5,102,0,0,75,14,1,0,0,0,76,77,5,101,0,0,77,78,5,108,0,0,78,79,5,
	115,0,0,79,80,5,101,0,0,80,16,1,0,0,0,81,82,5,119,0,0,82,83,5,104,0,0,83,
	84,5,105,0,0,84,85,5,108,0,0,85,86,5,101,0,0,86,18,1,0,0,0,87,88,5,108,
	0,0,88,89,5,101,0,0,89,96,5,116,0,0,90,91,5,99,0,0,91,92,5,111,0,0,92,93,
	5,110,0,0,93,94,5,115,0,0,94,96,5,116,0,0,95,87,1,0,0,0,95,90,1,0,0,0,96,
	20,1,0,0,0,97,101,7,0,0,0,98,100,7,1,0,0,99,98,1,0,0,0,100,103,1,0,0,0,
	101,99,1,0,0,0,101,102,1,0,0,0,102,22,1,0,0,0,103,101,1,0,0,0,104,106,7,
	2,0,0,105,104,1,0,0,0,106,107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,
	24,1,0,0,0,109,110,5,42,0,0,110,26,1,0,0,0,111,112,5,47,0,0,112,28,1,0,
	0,0,113,114,5,43,0,0,114,30,1,0,0,0,115,116,5,45,0,0,116,32,1,0,0,0,117,
	118,5,61,0,0,118,34,1,0,0,0,119,120,5,61,0,0,120,121,5,61,0,0,121,36,1,
	0,0,0,122,123,5,33,0,0,123,124,5,61,0,0,124,38,1,0,0,0,125,126,5,60,0,0,
	126,40,1,0,0,0,127,128,5,60,0,0,128,129,5,61,0,0,129,42,1,0,0,0,130,131,
	5,62,0,0,131,44,1,0,0,0,132,133,5,62,0,0,133,134,5,61,0,0,134,46,1,0,0,
	0,135,137,7,3,0,0,136,135,1,0,0,0,137,138,1,0,0,0,138,136,1,0,0,0,138,139,
	1,0,0,0,139,140,1,0,0,0,140,141,6,23,0,0,141,48,1,0,0,0,142,143,5,47,0,
	0,143,144,5,47,0,0,144,148,1,0,0,0,145,147,8,4,0,0,146,145,1,0,0,0,147,
	150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,148,1,0,
	0,0,151,152,6,24,0,0,152,50,1,0,0,0,6,0,95,101,107,138,148,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Scriptoslav80Lexer.__ATN) {
			Scriptoslav80Lexer.__ATN = new ATNDeserializer().deserialize(Scriptoslav80Lexer._serializedATN);
		}

		return Scriptoslav80Lexer.__ATN;
	}


	static DecisionsToDFA = Scriptoslav80Lexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}