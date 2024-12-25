grammar Scriptoslav80;

program: (stmt)* EOF;

stmt:	varDecl
	| assignment
	| print
	| ifstmt
	| blockstmt
	| whilestmt
        ;

expr: 	'(' expr ')'					                #parenthesisExpr
	| left=expr op=(ASTERISK | SLASH) right=expr	    #mulDivExpr
	| left=expr op=(PLUS | MINUS) right=expr	        #plusMinusExpr
	| left=expr compOperator right=expr		            #compExpr
	| ID						                        #idExp
	| NUM						                        #numExpr
	;

varDecl: MUTABILITY ID '=' expr ';'	;

assignment: ID '=' expr ';'	;

compOperator: op=(LESS | LESS_OR_EQUAL | EQUAL | NOT_EQUAL | GREATER | GREATER_OR_EQUAL) ;

print: 'monitor.log' '(' expr ')' ';'			;

blockstmt: '{' (stmt)* '}' 			;


ifstmt:		'if' '(' expr ')' stmt  elsestmt? ;

elsestmt:	'else' stmt 			;

whilestmt:	'while' '(' expr ')' stmt	;

// список токенов
MUTABILITY: 'let' | 'const' ;

ID		: [a-zA-Z_] [a-zA-Z_0-9]* ;
NUM		: [0-9]+ ;


ASTERISK            : '*' ;
SLASH               : '/' ;
PLUS                : '+' ;
MINUS               : '-' ;

ASSIGN              : '=' ;

EQUAL               : '==' ;
NOT_EQUAL           : '!=' ;
LESS                : '<' ;
LESS_OR_EQUAL       : '<=' ;
GREATER             : '>' ;
GREATER_OR_EQUAL    : '>=' ;

SPACE               : [ \r\n\t]+ -> skip;
LINE_COMMENT        : '//' ~[\n\r]* -> skip;

