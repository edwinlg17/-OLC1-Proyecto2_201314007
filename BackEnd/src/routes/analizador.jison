/* Importaciones  */
%{
	const tipo	= require('./apiJson').tipo;
    const operacion	= require('./apiJson').operacion;
    const insAPI = require('./apiJson').insAPI;

    let err = [];

%}

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

"++"                    { return 'tkSInc'; }
"+"                     { return 'tkSMas'; }
"--"                    { return 'tkSDec'; }
"-"                     { return 'tkSGui'; } 
"*"                     { return 'tkSPor'; } 
"/"                     { return 'tkSBarInc'; } 
"^"                     { return 'tkSPot'; } 
"%"                     { return 'tkSMod'; }

"'"                     { return 'tkSComSim'; }
"\""                    { return 'tkSComDob'; }

"\\"                    { return 'tkSBarInv'; }
"&&"                    { return 'tkSAnd'; }
"||"                    { return 'tkSOr'; }
"!="                    { return 'tkSDif'; }
"!"                     { return 'tkSAdm'; }
"=="                    { return 'tkSDIgu'; }
"="                     { return 'tkSIgu'; }
">="                    { return 'tkSMayIgu'; }
">"                     { return 'tkSMay'; }
"<="                    { return 'tkSMenIgu'; }
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

[0-9]+("."[0-9]+)\b  	                    { return 'tkDec'; }     // decimal
[0-9]+\b				                    { return 'tkNum'; }     // numero

\s+											// se ignoran espacios en blanco

<<EOF>>				    return 'EOF';       // fin del archivo

// Error Lexico
.	                    { console.log('Error Lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

/* asociatividad y precedencia */
// logicas
%left 'tkSAnd' 'tkSOr'
// relacionales
%left 'tkSDIgu' 'tkSMay' 'tkSMayIgu' 'tkSMen' 'tkSMenIgu' 'tkSDif' 
// operaciones aritmeticas
%left 'tkSMas' 'tkSGui'
%left 'tkSPor' 'tkSBarInc'  
%left 'tkSPot' 'tkSMod'
%left NEG

%start S

%% /* Analisis Sintactico */

// Clases y Imports
S
    : CLAIMP EOF { return $1; } //console.log(JSON.stringify($1, null, 2));
    ;

CLAIMP
    : CLAIMPP                                                                             
    |                                                                   { $$ = [{text: 'indefinido', 'icon': './img/atr.png'}]; }
    ;

CLAIMPP
    : CLAIMPP SINCLAIMP                                                 { $1.push($2); $$ = $1; }
    | SINCLAIMP                                                         { $$ = [$1]; }
    ;

SINCLAIMP 
    : tkRCla tkIde tkSLlaAbr MMFV tkSLlaCie                             { $$ = insAPI.cla($2, $4); }
    | tkRImp ESPIMP tkSPunCom                                           { $$ = insAPI.imp($2); }
    | error                                                             { $$ = ''; console.log('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
    ;

ESPIMP
    : ESPIMP tkSPun tkIde                                               { $1.push(insAPI.val('identificador',$3)); $$ = $1; }
    | tkIde                                                             { $$ = [insAPI.val('identificador', $1)]; }
    ;

// Funciones, Metodos, Variables Globales
MMFV 
    : MMFVP                                                             
    |                                                                   { $$ = [{text: 'indefinido', 'icon': './img/atr.png'}]; }
    ;

MMFVP
    : MMFVP SINMMFV                                                     { $1.push($2); $$ = $1; }
    | SINMMFV                                                           { $$ = [$1]; } 
    ;

SINMMFV
    : tkRVoi tkRMai tkSParAbr tkSParCie tkSLlaAbr INS tkSLlaCie         { $$ = insAPI.mai($6); }
    | tkRVoi tkIde tkSParAbr PAR tkSParCie tkSLlaAbr INS tkSLlaCie      { $$ = insAPI.met($2, $4, $7); }                                           
    | TIP tkIde tkSParAbr PAR tkSParCie tkSLlaAbr INS tkSLlaCie         { $$ = insAPI.fun($1, $2, $4, $7); }                                     
    | TIP DECVARMUL tkSPunCom                                           { $$ = insAPI.dec($1, $2); }     
    | error                                                             { $$ = ''; console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
    ;

INS 
    : INSP                                                              
    |                                                                   { $$ = [{text: 'indefinido', 'icon': './img/atr.png'}]; }
    ;

INSP
    : INSP SININS                                                       { $1.push($2); $$ = $1; }
    | SININS                                                            { 
        if(Array.isArray($1)) { 
            $$ = $1; 
        } else { 
            $$ = [$1]; 
        } 
    } 
    ;

SININS 
    : TIP DECVARMUL tkSPunCom                                                                       { $$ = insAPI.dec($1, $2); }  
    | tkIde tkSIgu EXP tkSPunCom                                                                    { $$ = insAPI.asi($1, $3); }
    | tkRSis tkSPun tkROut tkSPun PRI tkSParAbr EXP tkSParCie tkSPunCom                             { $$ = insAPI.pri($5, $7); }   
    | tkRIf tkSParAbr EXP tkSParCie tkSLlaAbr INS tkSLlaCie ELS                                     { 
        var a = []; 
        if(Array.isArray($8)){ 
            $8.unshift(insAPI.if($3, $6)); 
            $$ = insAPI.insIf($8); 
        } else { 
            if($8 != '')
                a.push($8);
            a.unshift(insAPI.if($3, $6)); 
            $$ = insAPI.insIf(a); 
        } 
    }
    | tkRSwi tkSParAbr EXP tkSParCie tkSLlaAbr CAS tkSLlaCie                                        { 
        if(Array.isArray($6)){ 
            $$ = insAPI.swi($3, $6);
        } else { 
            if($6 == '')
                $$ = insAPI.swi($3, [{text: 'indefinido', 'icon': './img/atr.png'}]);
                else
                $$ = insAPI.swi($3, [$6]);
            
        }
     }
    | tkRFor tkSParAbr DECASI tkSPunCom EXP tkSPunCom ASIINC tkSParCie tkSLlaAbr INS tkSLlaCie      { $$ = insAPI.for($3, $5, $7, $10); }
    | tkRWhi tkSParAbr EXP tkSParCie tkSLlaAbr INS tkSLlaCie                                        { $$ = insAPI.whi($3, $6);  }   
    | tkRDo tkSLlaAbr INS tkSLlaCie tkRWhi tkSParAbr EXP tkSParCie tkSPunCom                        { $$ = insAPI.do($7, $3); }           
    | tkIde tkSParAbr tkSParCie tkSPunCom                                                           { $$ = insAPI.llaFun($1,[{text: 'indefinido', 'icon': './img/atr.png'}]); }
    | tkIde tkSParAbr LISEXP tkSParCie tkSPunCom                                                    { $$ = insAPI.llaFun($1, $3); }
    | tkRBre tkSPunCom                                                                              { $$ = insAPI.bre(); }
    | tkRCon tkSPunCom                                                                              { $$ = insAPI.con(); }
    | tkRRet tkSPunCom                                                                              { $$ = insAPI.ret({text: 'indefinido', 'icon': './img/atr.png'}); }
    | tkRRet EXP tkSPunCom                                                                          { $$ = insAPI.ret($2); }
    | error                                                                                         { $$ = ''; err.push({err:'Error Sintactico', lin:this._$.first_line, col: this._$.first_column}); console.error('Este es un error sintáctico: ' +yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
//    | error REQ                                                                                     { $$ = ''; err.push({err:'Error Sintactico', lin:this._$.first_line, col: this._$.first_column}); console.error('Este es un error sintáctico: ' +yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
    ;


// asignacion
DECASI
    : TIP tkIde tkSIgu EXP                                              { $$ = insAPI.dec($1, [insAPI.nueVar($2, $4)]); } 
    | tkIde tkSIgu EXP                                                  { $$ = insAPI.asi($1, $3); }
    ;

ASIINC
    : tkIde tkSIgu EXP                                                  { $$ = insAPI.asi($1, $3); }
    | EXP                                                               
    ;

// else if y else
ELS
    : tkREls SINELS                                                     { $$ = $2; }
    |                                                                   { $$ = ''; }
    ;

SINELS 
    : tkRIf tkSParAbr EXP tkSParCie tkSLlaAbr INS tkSLlaCie ELS         { 
        var a = []; 
        if(Array.isArray($8)){ 
            $8.unshift(insAPI.elsif($3, $6)); 
            $$ = $8; 
        } else { 
            if($8 != '')
                a.push($8);
            a.unshift(insAPI.elsif($3, $6)); 
            $$ = a; 
        } 
    }
    | tkSLlaAbr INS tkSLlaCie                                           { $$ = insAPI.els($2); } 
    ;


// case
CAS 
    : CASP 
    |                                                                   { $$ = ''; }
    ;

CASP		
    : tkRCas EXP tkSDosPun INS CAS                                      { 
        var a = []; 
        if(Array.isArray($5)){ 
            $5.unshift(insAPI.cas($2, $4)); 
            $$ = $5; 
        } else { 
            if($5 != '')
                a.push($5);
            a.unshift(insAPI.cas($2, $4)); 
            $$ = a; 
        } 
    }                      
    | tkRDef tkSDosPun INS                                              { $$ = insAPI.def($3); }                       
    ;


// print
PRI 
    : tkRPri                                                            
    | tkRPriLn                                                          
    ;

DECVARMUL
    : SINVAR                                                            { $$ = [$1]; }
    | DECVARMUL tkSCom SINVAR                                           { $1.push($3); $$ = $1; }
    ;

SINVAR
    : tkIde                                                             { $$ = insAPI.nueVar($1, {text: 'indefinido', 'icon': './img/atr.png'}); }
    | tkIde tkSIgu EXP                                                  { $$ = insAPI.nueVar($1, $3); }
    ;

EXP 
    : EXP tkSAnd EXP                                                    { $$ = insAPI.ope($1, operacion.and, $3);}
	| EXP tkSOr EXP                                                     { $$ = insAPI.ope($1, operacion.or, $3); }

    | EXP tkSDIgu EXP                                                   { $$ = insAPI.ope($1, operacion.igu, $3); } 
    | EXP tkSMay EXP                                                    { $$ = insAPI.ope($1, operacion.may, $3); } 
    | EXP tkSMayIgu EXP                                                 { $$ = insAPI.ope($1, operacion.mayigu, $3); }
    | EXP tkSMen EXP                                                    { $$ = insAPI.ope($1, operacion.men, $3); }
    | EXP tkSMenIgu EXP                                                 { $$ = insAPI.ope($1, operacion.menigu, $3); } 
    | EXP tkSDif EXP                                                    { $$ = insAPI.ope($1, operacion.dif, $3); } 
    
    | EXP tkSMas EXP                                                    { $$ = insAPI.ope($1, operacion.sum, $3); } 
	| EXP tkSGui EXP                                                    { $$ = insAPI.ope($1, operacion.res, $3); }
	| EXP tkSPor EXP                                                    { $$ = insAPI.ope($1, operacion.mul, $3); }
    | EXP tkSBarInc EXP                                                 { $$ = insAPI.ope($1, operacion.div, $3); }
	| EXP tkSPot EXP                                                    { $$ = insAPI.ope($1, operacion.pot, $3); }
	| EXP tkSMod EXP                                                    { $$ = insAPI.ope($1, operacion.mod, $3); }

	| tkSGui EXP %prec NEG	                                            { $$ = insAPI.opeUna( operacion.neg, $2 ); } 
    | tkSAdm EXP %prec NEG	                                            { $$ = insAPI.opeUna( operacion.not, $2 ); } 
    | VAL tkSInc %prec NEG	                                            { $$ = insAPI.opeUna( operacion.inc, $1 ); } 
    | VAL tkSDec %prec NEG	                                            { $$ = insAPI.opeUna( operacion.dec, $1 ); } 

    | VAL
    ;

VAL 
    : tkNum                                                             { $$ = insAPI.val(tipo.int, $1);}
    | tkDec                                                             { $$ = insAPI.val(tipo.dou, $1);}
    | tkCad                                                             { $$ = insAPI.val(tipo.str, $1);}
    | tkCar                                                             { $$ = insAPI.val(tipo.cha, $1);}        
    | tkRTru                                                            { $$ = insAPI.val(tipo.boo, $1);}
    | tkRFal                                                            { $$ = insAPI.val(tipo.boo, $1);}
    | tkIde                                                             { $$ = insAPI.val(tipo.ide, $1);}
    | tkIde tkSParAbr tkSParCie                                         { $$ = insAPI.llaFun($1,[{text: 'indefinido', 'icon': './img/atr.png'}]); }
    | tkIde tkSParAbr LISEXP tkSParCie                                  { $$ = insAPI.llaFun($1, $3); }
    | tkSParAbr EXP tkSParCie                                           { $$ = $2; }
    ;

LISEXP 
    : EXP                                                               { $$ = [$1]; }
    | LISEXP tkSCom EXP                                                 { $1.push($3); $$ = $1; }    
    ;

// Declaracion Multiple de Parametros                       
PAR
    : LISPAR                                                                              
    |                                                                   { $$ = [{text: 'indefinido'}]; }
    ;

LISPAR
    : TIP tkIde                                                         { $$ = [insAPI.decPar($1, $2)]; }
    | LISPAR tkSCom TIP tkIde                                           { $1.push(insAPI.decPar($3, $4)); $$ = $1; }
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

