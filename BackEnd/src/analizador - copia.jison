/* Analizador Lexico */

%lex

%options case-sensitive

%%

"//"[^\n]*								    // comentario simple
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]	        // comentario multilinea

[\'][\\][ntr\"\'\\][\']                     { yytext.substr(1,yyleng-2); return 'tkCar'; } // caracter especial  
[\'][^\'\"\\][\']                           { yytext.substr(1,yyleng-2); return 'tkCar'; } // caracter 

[\"][^\\\"]*([\\][\\\"ntr][^\\\"]*)*[\"]    { yytext = yytext.substr(1,yyleng-2); return 'tkCad'; } // cadena

// Palabras Reservadas
"import"                { return 'tkRImp'; }
"class"                 { return 'tkRCla'; }
"public"                { return 'tkRPub'; }
"private"               { return 'tkRPri'; }
"protected"             { return 'tkRPro'; }
"static"                { return 'tkRSta'; }

"void"                  { return 'tkRVoi'; }
"main"                  { return 'tkRMai'; }

"int"                   { return 'tkRInt'; }
"double"                { return 'tkRDou'; }
"boolean"               { return 'tkRBoo'; }
"char"                  { return 'tkRCha'; }
"String"                { return 'tkRStr'; }
"true"                  { return 'tkRTru'; }
"false"                 { return 'tkRFal'; }

"System"                { return 'tkRSis'; }
"out"                   { return 'tkROut'; }
"print"                 { return 'tkRPri'; }
"println"               { return 'tkRPriLn'; }

"break"                 { return 'tkRBre'; }
"continue"              { return 'tkRCon'; }
"return"                { return 'tkRRet'; }

"if"                    { return 'tkRIf'; }
"else"                  { return 'tkREls'; }

"switch"                { return 'tkRSwi'; }
"case"                  { return 'tkRCas'; }
"default"               { return 'tkRDef'; }

"for"                   { return 'tkRFor'; }
"while"                 { return 'tkRWhi'; }
"do"                    { return 'tkRDo'; }

"+"                     { return 'tkSMas'; }
"-"                     { return 'tkSGui'; } 
"*"                     { return 'tkSPor'; } 
"/"                     { return 'tkSBarInc'; } 
"^"                     { return 'tkSPot'; } 
"%"                     { return 'tkSMod'; }

"'"                     { return 'tkSComSim'; }
"\""                    { return 'tkSComDob'; }

"\\"                    { return 'tkSBarInv'; }
"&"                     { return 'tkSAmp'; }
"|"                     { return 'tkSBarVer'; }
"!"                     { return 'tkSAdm'; }
"="                     { return 'tkSIgu'; }
">"                     { return 'tkSMay'; }
"<"                     { return 'tkSMen'; }

","                     { return 'tkSCom'; }
"."                     { return 'tkSPun'; }
";"                     { return 'tkSPunCom'; }
":"                     { return 'tkSDosPun'; }

"("                     { return 'tkSParAbr'; }
")"                     { return 'tkSParCie'; }
"{"                     { return 'tkSLlaAbr'; }
"}"                     { return 'tkSLlaCie'; }

([a-zA-Z_])[a-zA-Z0-9_]*	                { return 'tkIde'; }    // identificadores

[0-9]+("."[0-9]+)?\b  	                    { return 'tkDec'; }     // decimal
[0-9]+\b				                    { return 'tkNum'; }     // numero

\s+											// se ignoran espacios en blanco

<<EOF>>				    return 'EOF';       // fin del archivo

// Error Lexico
.	                    { console.log('Error Lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

/* asociatividad y precedencia */
%left 'tkSMas' 'tkSGui'
%left 'tkSPor' 'tkSBarInc' 'tkSMod' 
%left 'tkSEle'
%left UMINUS
%left 'tkSPot'

%start S

%% /* Analisis Sintactico */

// Clases y Imports
S
    : CLAIMP EOF { console.log($1); return $1; }
    ;

CLAIMP
    : CLAIMPP
    |                                                                   { $$ = ''; }
    ;

CLAIMPP
    : CLAIMPP SINCLAIMP                                                 { $$ = $1 + $2; }
    | SINCLAIMP
    ;

SINCLAIMP 
    : tkRCla tkIde tkSLlaAbr MMFV tkSLlaCie                             { $$ = $1 + $2 + $3 + $4 + $5; }
    | tkRImp ESPIMP tkSPunCom                                           { $$ = $1 + $2 + $3; }
    | error REQ                                                         { console.log(yytext); }
    ;

ESPIMP
    : ESPIMP tkSPun tkIde                                               { $$ = $1 + $2 + $3; }
    | tkIde                                                             { $$ = $1; }
    ;

// Funciones, Metodos, Variables Globales
MMFV 
    : MMFVP
    |                                                                   { $$ = ''; }
    ;

MMFVP
    : MMFVP SINMMFV                                                     { $$ = $1 + $2; }
    | SINMMFV
    ;

SINMMFV
    : tkRVoi tkRMai tkSParAbr tkSParCie tkSLlaAbr INS tkSLlaCie         { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7; }
    | tkRVoi tkIde tkSParAbr PAR tkSParCie tkSLlaAbr INS tkSLlaCie      { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7; }                                           
    | TIP tkIde tkSParAbr PAR tkSParCie tkSLlaAbr INS tkSLlaCie         { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7; }                                     
    | TIP DECVARMUL tkSPunCom                                           { $$ = $1 + $2 + $3; }     
    | error REQ                                                         { console.log(yytext); }
    ;

INS 
    : INSP
    |                                                                   { $$ = ''; }
    ;

INSP
    : INSP SININS                                                       { $$ = $1 + $2; }
    | SININS
    ;

SININS 
    : TIP DECVARMUL tkSPunCom                                                                       { $$ = $1 + $2 + $3; }  
    | tkIde tkSIgu EXP tkSPunCom                                                                    { $$ = $1 + $2 + $3 + $4; }
    | tkRSis tkSPun tkROut tkSPun PRI tkSParAbr EXP tkSParCie tkSPunCom                             { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9; }   
    | tkRIf tkSParAbr EXP tkSParCie tkSLlaAbr INS tkSLlaCie ELS                                     { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8; }   
    | tkRSwi tkSParAbr EXP tkSParCie tkSLlaAbr CAS tkSLlaCie                                        { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7; } 
    | tkRFor tkSParAbr DECASI tkSPunCom EXP tkSPunCom ASIINC tkSParCie tkSLlaAbr INS tkSLlaCie      { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9 + $10 + $11; }
    | tkRWhi tkSParAbr EXP tkSParCie tkSLlaAbr INS tkSLlaCie                                        { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7; }   
    | tkRDo tkSLlaAbr INS tkSLlaCie tkRWhi tkSParAbr EXP tkSParCie tkSPunCom                        { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9; }           
    | tkRBre tkSPunCom                                                                              { $$ = $1 + $2; }
    | tkRCon tkSPunCom                                                                              { $$ = $1 + $2; }
    | tkRRet tkSPunCom                                                                              { $$ = $1 + $2; }
    | tkRRet EXP tkSPunCom                                                                          { $$ = $1 + $2 + $3; }
    | error REQ                                                                                     { console.log(yytext); }
    ;

DECASI
    : TIP tkIde tkSIgu EXP                                              { $$ = $1 + $2 + $3 + $4; } 
    | tkIde tkSIgu EXP                                                  { $$ = $1 + $2 + $3; }
    ;

ASIINC
    : tkIde tkSIgu EXP                                                  { $$ = $1 + $2 + $3; }
    | tkIde INC                                                         { $$ = $1 + $2; }
    ;

INC 
    : tkSGui tkSGui                                                     { $$ = $1 + $2; }
    | tkSMas tkSMas                                                     { $$ = $1 + $2; }
    ;

// else if y else
ELS		
    : tkREls ELSP                                                       { $$ = $1 + $2; }
    |	                                                                { $$ = ''; }
    ;	                                                           

// case	default	
ELSP		
    : tkRIf tkSParAbr EXP tkSParCie tkSLlaAbr INS tkSLlaCie ELS         { $$ = $1 + $2 + $3 + $4 + $5 + $6 + $7 + $8; } 
	| tkSLlaAbr INS tkSLlaCie                                           { $$ = $1 + $2 + $3; }
    ;

CAS
    : CASP
    |                                                                   { $$ = ''; }
    ;

CASP		
    : SWICAS tkSDosPun INS                                              { $$ = $1 + $2 + $3; }                        
    | CASP SWICAS tkSDosPun INS                                         { $$ = $1 + $2 + $3 + $4; } 
    ;

SWICAS
    : tkRCas EXP                                                        { $$ = $1 + $2; } 
    | tkRDef
    ;

// print
PRI 
    : tkRPri
    | tkRPriLn
    ;

DECVARMUL
    : tkIde 
    | tkIde tkSIgu EXP                                                  { $$ = $1 + $2 + $3; }
    | DECVARMUL tkSCom tkIde                                            { $$ = $1 + $2 + $3; }
    | DECVARMUL tkSCom tkIde tkSIgu EXP                                 { $$ = $1 + $2 + $3 + $4 + $5; }
    ;

EXP 
    : VAL EXPP                                                          { $$ = $1 + $2; console.log($1 + $2); }
    ;

EXPP
    : OPE EXP                                                           { $$ = $1 + $2;  }
    | OPE 
    |                                                                   { $$ = ''; }
    ;

OPE 
    : tkSMas 
    | tkSGui
    | tkSGui tkSGui                                                     { $$ = $1 + $2; }
    | tkSMas tkSMas                                                     { $$ = $1 + $2; }
    | tkSPor 
    | tkSBarInc 
    | tkSPot 
    | tkSMod 
    | tkSIgu tkSIgu                                                     { $$ = $1 + $2; }
    | tkSAdm tkSIgu                                                     { $$ = $1 + $2; }
    | tkSMay tkSIgu                                                     { $$ = $1 + $2; }
    | tkSMen tkSIgu                                                     { $$ = $1 + $2; }
    | tkSMay 
    | tkSMen 
    | tkSAmp tkSAmp                                                     { $$ = $1 + $2; }
    | tkSBarVer tkSBarVer                                               { $$ = $1 + $2; }
    ;

VAL 
    : tkCad
    | tkCar                                                                 
    | VAL2                                                                  
    | tkSGui VAL2                                                        { $$ = $1 + $2; }
    | tkSAdm VAL2                                                        { $$ = $1 + $2; }
    ;

VAL2 
    : tkNum
    | tkDec
    
    | tkRTru
    | tkRFal
    | tkIde
    | tkIde tkSParAbr tkSParCie                                         { $$ = $1 + $2 + $3; }
    | tkIde tkSParAbr LISEXP tkSParCie                                  { $$ = $1 + $2 + $3 + $4; }
    | tkSParAbr EXP tkSParCie                                           { $$ = $1 + $2 + $3; }
    ;

LISEXP 
    : EXP
    | LISEXP tkSCom EXP                                                 { $$ = $1 + $2 + $3; }    
    ;

// Declaracion Multiple de Parametros                       
PAR
    : LISPAR 
    |                                                                   { $$ = ''; }
    ;

LISPAR
    : TIP tkIde                                                         { $$ = $1 + $2; }
    | LISPAR tkSCom TIP tkIde                                           { $$ = $1 + $2 + $3 + $4; }
    ;

// terminales
TIP
    : tkRInt
    | tkRDou
    | tkRCha
    | tkRStr
    | tkRBoo
    ;

REQ 
    : tkSPunCom
    | tkSLlaCie
    | EOF { return 'ERROR IRECUPERABLE'; }
    ;

