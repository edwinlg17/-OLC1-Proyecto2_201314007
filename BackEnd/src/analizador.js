/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,5],$V2=[1,6],$V3=[2,5,8,13],$V4=[1,16],$V5=[1,15],$V6=[1,14],$V7=[15,17],$V8=[2,5,8,9,12,13,20,32,35,37,39,42,43,44,45,46,55,56,81,82,83,84,85],$V9=[1,25],$Va=[1,23],$Vb=[1,26],$Vc=[1,27],$Vd=[1,28],$Ve=[1,29],$Vf=[1,30],$Vg=[2,12,20,81,82,83,84,85],$Vh=[15,59],$Vi=[2,55],$Vj=[1,42],$Vk=[1,44],$Vl=[2,95],$Vm=[1,61],$Vn=[1,62],$Vo=[1,55],$Vp=[1,56],$Vq=[1,52],$Vr=[1,53],$Vs=[1,57],$Vt=[1,58],$Vu=[1,59],$Vv=[1,60],$Vw=[15,23,54,59],$Vx=[15,23,30,48,49,54,59,63,64,65,66,67,68,69,70,71],$Vy=[1,102],$Vz=[1,92],$VA=[2,21],$VB=[1,93],$VC=[1,94],$VD=[1,95],$VE=[1,96],$VF=[1,97],$VG=[1,98],$VH=[1,99],$VI=[1,100],$VJ=[1,101],$VK=[23,59],$VL=[9,15,22,23,48,54,59,67,72,73,75,76,77,78],$VM=[12,55,56],$VN=[2,9,12,32,35,37,39,42,43,44,45,46,55,56,81,82,83,84,85],$VO=[1,179],$VP=[1,180],$VQ=[2,44],$VR=[1,197];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"S":3,"CLAIMP":4,"EOF":5,"CLAIMPP":6,"SINCLAIMP":7,"tkRCla":8,"tkIde":9,"tkSLlaAbr":10,"MMFV":11,"tkSLlaCie":12,"tkRImp":13,"ESPIMP":14,"tkSPunCom":15,"REQ":16,"tkSPun":17,"MMFVP":18,"SINMMFV":19,"tkRVoi":20,"tkRMai":21,"tkSParAbr":22,"tkSParCie":23,"INS":24,"PAR":25,"TIP":26,"DECVARMUL":27,"INSP":28,"SININS":29,"tkSIgu":30,"EXP":31,"tkRSis":32,"tkROut":33,"PRI":34,"tkRIf":35,"ELS":36,"tkRSwi":37,"CAS":38,"tkRFor":39,"DECASI":40,"ASIINC":41,"tkRWhi":42,"tkRDo":43,"tkRBre":44,"tkRCon":45,"tkRRet":46,"INC":47,"tkSGui":48,"tkSMas":49,"tkREls":50,"ELSP":51,"CASP":52,"SWICAS":53,"tkSDosPun":54,"tkRCas":55,"tkRDef":56,"tkRPri":57,"tkRPriLn":58,"tkSCom":59,"VAL":60,"EXPP":61,"OPE":62,"tkSPor":63,"tkSBarInc":64,"tkSPot":65,"tkSMod":66,"tkSAdm":67,"tkSMay":68,"tkSMen":69,"tkSAmp":70,"tkSBarVer":71,"tkCad":72,"tkCar":73,"VAL2":74,"tkNum":75,"tkDec":76,"tkRTru":77,"tkRFal":78,"LISEXP":79,"LISPAR":80,"tkRInt":81,"tkRDou":82,"tkRCha":83,"tkRStr":84,"tkRBoo":85,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"tkRCla",9:"tkIde",10:"tkSLlaAbr",12:"tkSLlaCie",13:"tkRImp",15:"tkSPunCom",17:"tkSPun",20:"tkRVoi",21:"tkRMai",22:"tkSParAbr",23:"tkSParCie",30:"tkSIgu",32:"tkRSis",33:"tkROut",35:"tkRIf",37:"tkRSwi",39:"tkRFor",42:"tkRWhi",43:"tkRDo",44:"tkRBre",45:"tkRCon",46:"tkRRet",48:"tkSGui",49:"tkSMas",50:"tkREls",54:"tkSDosPun",55:"tkRCas",56:"tkRDef",57:"tkRPri",58:"tkRPriLn",59:"tkSCom",63:"tkSPor",64:"tkSBarInc",65:"tkSPot",66:"tkSMod",67:"tkSAdm",68:"tkSMay",69:"tkSMen",70:"tkSAmp",71:"tkSBarVer",72:"tkCad",73:"tkCar",75:"tkNum",76:"tkDec",77:"tkRTru",78:"tkRFal",81:"tkRInt",82:"tkRDou",83:"tkRCha",84:"tkRStr",85:"tkRBoo"},
productions_: [0,[3,2],[4,1],[4,0],[6,2],[6,1],[7,5],[7,3],[7,2],[14,3],[14,1],[11,1],[11,0],[18,2],[18,1],[19,7],[19,8],[19,8],[19,3],[19,2],[24,1],[24,0],[28,2],[28,1],[29,3],[29,4],[29,9],[29,8],[29,7],[29,11],[29,7],[29,9],[29,2],[29,2],[29,2],[29,3],[29,2],[40,4],[40,3],[41,3],[41,2],[47,2],[47,2],[36,2],[36,0],[51,8],[51,3],[38,1],[38,0],[52,3],[52,4],[53,2],[53,1],[34,1],[34,1],[27,1],[27,3],[27,3],[27,5],[31,2],[61,2],[61,1],[61,0],[62,1],[62,1],[62,2],[62,2],[62,1],[62,1],[62,1],[62,1],[62,2],[62,2],[62,2],[62,2],[62,1],[62,1],[62,2],[62,2],[60,1],[60,1],[60,1],[60,2],[60,2],[74,1],[74,1],[74,1],[74,1],[74,1],[74,3],[74,4],[74,3],[79,1],[79,3],[25,1],[25,0],[80,2],[80,4],[26,1],[26,1],[26,1],[26,1],[26,1],[16,1],[16,1],[16,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 console.log($$[$0-1]); return $$[$0-1]; 
break;
case 3: case 12: case 21: case 44: case 48: case 62: case 95:
 this.$ = ''; 
break;
case 4: case 13: case 22: case 32: case 33: case 34: case 40: case 41: case 42: case 43: case 51: case 59: case 60: case 65: case 66: case 71: case 72: case 73: case 74: case 77: case 78: case 82: case 83: case 96:
 this.$ = $$[$0-1] + $$[$0]; 
break;
case 6: case 58:
 this.$ = $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 7: case 9: case 18: case 24: case 35: case 38: case 39: case 46: case 49: case 56: case 57: case 89: case 91: case 93:
 this.$ = $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 8: case 19: case 36:
 console.log(yytext); 
break;
case 10:
 this.$ = $$[$0]; 
break;
case 15: case 28: case 30:
 this.$ = $$[$0-6] + $$[$0-5] + $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 16: case 17:
 this.$ = $$[$0-7] + $$[$0-6] + $$[$0-5] + $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1]; 
break;
case 25: case 37: case 50: case 90: case 97:
 this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 26: case 31:
 this.$ = $$[$0-8] + $$[$0-7] + $$[$0-6] + $$[$0-5] + $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 27: case 45:
 this.$ = $$[$0-7] + $$[$0-6] + $$[$0-5] + $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 29:
 this.$ = $$[$0-10] + $$[$0-9] + $$[$0-8] + $$[$0-7] + $$[$0-6] + $$[$0-5] + $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0]; 
break;
case 105:
 return 'ERROR IRECUPERABLE'; 
break;
}
},
table: [{2:$V0,3:1,4:2,5:[2,3],6:3,7:4,8:$V1,13:$V2},{1:[3]},{5:[1,8]},{2:$V0,5:[2,2],7:9,8:$V1,13:$V2},o($V3,[2,5]),{9:[1,10]},{9:[1,12],14:11},{5:$V4,12:$V5,15:$V6,16:13},{1:[2,1]},o($V3,[2,4]),{10:[1,17]},{15:[1,18],17:[1,19]},o($V7,[2,10]),o($V3,[2,8]),o($V8,[2,103]),o($V8,[2,104]),o($V8,[2,105]),{2:$V9,11:20,12:[2,12],18:21,19:22,20:$Va,26:24,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},o($V3,[2,7]),{9:[1,31]},{12:[1,32]},{2:$V9,12:[2,11],19:33,20:$Va,26:24,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},o($Vg,[2,14]),{9:[1,35],21:[1,34]},{9:[1,36],27:37},{5:$V4,12:$V5,15:$V6,16:38},{9:[2,98]},{9:[2,99]},{9:[2,100]},{9:[2,101]},{9:[2,102]},o($V7,[2,9]),o($V3,[2,6]),o($Vg,[2,13]),{22:[1,39]},{22:[1,40]},o($Vh,$Vi,{22:[1,41],30:$Vj}),{15:[1,43],59:$Vk},o($Vg,[2,19]),{23:[1,45]},{23:$Vl,25:46,26:48,80:47,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{23:$Vl,25:49,26:48,80:47,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{9:$Vm,22:$Vn,31:50,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},o($Vg,[2,18]),{9:[1,63]},{10:[1,64]},{23:[1,65]},{23:[2,94],59:[1,66]},{9:[1,67]},{23:[1,68]},o($Vh,[2,56]),o($Vw,[2,62],{61:69,62:70,30:[1,77],48:[1,72],49:[1,71],63:[1,73],64:[1,74],65:[1,75],66:[1,76],67:[1,78],68:[1,79],69:[1,80],70:[1,81],71:[1,82]}),o($Vx,[2,79]),o($Vx,[2,80]),o($Vx,[2,81]),{9:$Vm,22:$Vn,74:83,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{9:$Vm,22:$Vn,74:84,75:$Vs,76:$Vt,77:$Vu,78:$Vv},o($Vx,[2,84]),o($Vx,[2,85]),o($Vx,[2,86]),o($Vx,[2,87]),o($Vx,[2,88],{22:[1,85]}),{9:$Vm,22:$Vn,31:86,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},o($Vh,[2,57],{30:[1,87]}),{2:$Vy,9:$Vz,12:$VA,24:88,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{10:[1,103]},{26:104,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},o($VK,[2,96]),{10:[1,105]},o($Vw,[2,59]),o($Vw,[2,61],{60:51,74:54,31:106,9:$Vm,22:$Vn,48:$Vo,67:$Vp,72:$Vq,73:$Vr,75:$Vs,76:$Vt,77:$Vu,78:$Vv}),o($VL,[2,63],{49:[1,107]}),o($VL,[2,64]),o($VL,[2,67]),o($VL,[2,68]),o($VL,[2,69]),o($VL,[2,70]),{30:[1,109]},{30:[1,110]},o($VL,[2,75],{30:[1,111]}),o($VL,[2,76],{30:[1,112]}),{70:[1,113]},{71:[1,114]},o($Vx,[2,82]),o($Vx,[2,83]),{9:$Vm,22:$Vn,23:[1,115],31:117,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv,79:116},{23:[1,118]},{9:$Vm,22:$Vn,31:119,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{12:[1,120]},o($VM,[2,20],{26:91,29:121,2:$Vy,9:$Vz,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf}),o($VN,[2,23]),{9:[1,123],27:122},{30:[1,124]},{17:[1,125]},{22:[1,126]},{22:[1,127]},{22:[1,128]},{22:[1,129]},{10:[1,130]},{15:[1,131]},{15:[1,132]},{9:$Vm,15:[1,133],22:$Vn,31:134,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{5:$V4,12:$V5,15:$V6,16:135},{2:$Vy,9:$Vz,12:$VA,24:136,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{9:[1,137]},{2:$Vy,9:$Vz,12:$VA,24:138,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},o($Vw,[2,60]),o($VL,[2,66]),o($VL,[2,65]),o($VL,[2,71]),o($VL,[2,72]),o($VL,[2,73]),o($VL,[2,74]),o($VL,[2,77]),o($VL,[2,78]),o($Vx,[2,89]),{23:[1,139],59:[1,140]},o($VK,[2,92]),o($Vx,[2,91]),o($Vh,[2,58]),o($Vg,[2,15]),o($VN,[2,22]),{15:[1,141],59:$Vk},o($Vh,$Vi,{30:$Vj}),{9:$Vm,22:$Vn,31:142,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{33:[1,143]},{9:$Vm,22:$Vn,31:144,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{9:$Vm,22:$Vn,31:145,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{9:[1,148],26:147,40:146,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{9:$Vm,22:$Vn,31:149,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{2:$Vy,9:$Vz,12:$VA,24:150,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},o($VN,[2,32]),o($VN,[2,33]),o($VN,[2,34]),{15:[1,151]},o($VN,[2,36]),{12:[1,152]},o($VK,[2,97]),{12:[1,153]},o($Vx,[2,90]),{9:$Vm,22:$Vn,31:154,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},o($VN,[2,24]),{15:[1,155]},{17:[1,156]},{23:[1,157]},{23:[1,158]},{15:[1,159]},{9:[1,160]},{30:[1,161]},{23:[1,162]},{12:[1,163]},o($VN,[2,35]),o($Vg,[2,16]),o($Vg,[2,17]),o($VK,[2,93]),o($VN,[2,25]),{34:164,57:[1,165],58:[1,166]},{10:[1,167]},{10:[1,168]},{9:$Vm,22:$Vn,31:169,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{30:[1,170]},{9:$Vm,22:$Vn,31:171,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{10:[1,172]},{42:[1,173]},{22:[1,174]},{22:[2,53]},{22:[2,54]},{2:$Vy,9:$Vz,12:$VA,24:175,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{12:[2,48],38:176,52:177,53:178,55:$VO,56:$VP},{15:[1,181]},{9:$Vm,22:$Vn,31:182,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{15:[2,38]},{2:$Vy,9:$Vz,12:$VA,24:183,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{22:[1,184]},{9:$Vm,22:$Vn,31:185,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{12:[1,186]},{12:[1,187]},{12:[2,47],53:188,55:$VO,56:$VP},{54:[1,189]},{9:$Vm,22:$Vn,31:190,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{54:[2,52]},{9:[1,192],41:191},{15:[2,37]},{12:[1,193]},{9:$Vm,22:$Vn,31:194,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{23:[1,195]},o($VN,$VQ,{36:196,50:$VR}),o($VN,[2,28]),{54:[1,198]},o($VM,$VA,{28:89,29:90,26:91,24:199,2:$Vy,9:$Vz,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf}),{54:[2,51]},{23:[1,200]},{30:[1,201],47:202,48:[1,203],49:[1,204]},o($VN,[2,30]),{23:[1,205]},{15:[1,206]},o($VN,[2,27]),{10:[1,209],35:[1,208],51:207},o($VM,$VA,{28:89,29:90,26:91,24:210,2:$Vy,9:$Vz,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf}),o($VM,[2,49]),{10:[1,211]},{9:$Vm,22:$Vn,31:212,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{23:[2,40]},{48:[1,213]},{49:[1,214]},{15:[1,215]},o($VN,[2,26]),o($VN,[2,43]),{22:[1,216]},{2:$Vy,9:$Vz,12:$VA,24:217,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},o($VM,[2,50]),{2:$Vy,9:$Vz,12:$VA,24:218,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{23:[2,39]},{23:[2,41]},{23:[2,42]},o($VN,[2,31]),{9:$Vm,22:$Vn,31:219,48:$Vo,60:51,67:$Vp,72:$Vq,73:$Vr,74:54,75:$Vs,76:$Vt,77:$Vu,78:$Vv},{12:[1,220]},{12:[1,221]},{23:[1,222]},o($VN,[2,46]),o($VN,[2,29]),{10:[1,223]},{2:$Vy,9:$Vz,12:$VA,24:224,26:91,28:89,29:90,32:$VB,35:$VC,37:$VD,39:$VE,42:$VF,43:$VG,44:$VH,45:$VI,46:$VJ,81:$Vb,82:$Vc,83:$Vd,84:$Ve,85:$Vf},{12:[1,225]},o($VN,$VQ,{36:226,50:$VR}),o($VN,[2,45])],
defaultActions: {8:[2,1],26:[2,98],27:[2,99],28:[2,100],29:[2,101],30:[2,102],165:[2,53],166:[2,54],171:[2,38],180:[2,52],182:[2,37],190:[2,51],202:[2,40],212:[2,39],213:[2,41],214:[2,42]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// comentario simple
break;
case 1:// comentario multilinea
break;
case 2: yy_.yytext.substr(1,yy_.yyleng-2); return 73; 
break;
case 3: yy_.yytext.substr(1,yy_.yyleng-2); return 73; 
break;
case 4: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 72; 
break;
case 5: return 13; 
break;
case 6: return 8; 
break;
case 7: return 'tkRPub'; 
break;
case 8: return 57; 
break;
case 9: return 'tkRPro'; 
break;
case 10: return 'tkRSta'; 
break;
case 11: return 20; 
break;
case 12: return 21; 
break;
case 13: return 81; 
break;
case 14: return 82; 
break;
case 15: return 85; 
break;
case 16: return 83; 
break;
case 17: return 84; 
break;
case 18: return 77; 
break;
case 19: return 78; 
break;
case 20: return 32; 
break;
case 21: return 33; 
break;
case 22: return 57; 
break;
case 23: return 58; 
break;
case 24: return 44; 
break;
case 25: return 45; 
break;
case 26: return 46; 
break;
case 27: return 35; 
break;
case 28: return 50; 
break;
case 29: return 37; 
break;
case 30: return 55; 
break;
case 31: return 56; 
break;
case 32: return 39; 
break;
case 33: return 42; 
break;
case 34: return 43; 
break;
case 35: return 49; 
break;
case 36: return 48; 
break;
case 37: return 63; 
break;
case 38: return 64; 
break;
case 39: return 65; 
break;
case 40: return 66; 
break;
case 41: return 'tkSComSim'; 
break;
case 42: return 'tkSComDob'; 
break;
case 43: return 'tkSBarInv'; 
break;
case 44: return 70; 
break;
case 45: return 71; 
break;
case 46: return 67; 
break;
case 47: return 30; 
break;
case 48: return 68; 
break;
case 49: return 69; 
break;
case 50: return 59; 
break;
case 51: return 17; 
break;
case 52: return 15; 
break;
case 53: return 54; 
break;
case 54: return 22; 
break;
case 55: return 23; 
break;
case 56: return 10; 
break;
case 57: return 12; 
break;
case 58: return 9; 
break;
case 59: return 76; 
break;
case 60: return 75; 
break;
case 61:// se ignoran espacios en blanco
break;
case 62:return 5;       // fin del archivo
break;
case 63: console.log('Error Lexico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\/\/[^\n]*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:[\'][\\][ntr\"\'\\][\'])/,/^(?:[\'][^\'\"\\][\'])/,/^(?:[\"][^\\\"]*([\\][\\\"ntr][^\\\"]*)*[\"])/,/^(?:import\b)/,/^(?:class\b)/,/^(?:public\b)/,/^(?:private\b)/,/^(?:protected\b)/,/^(?:static\b)/,/^(?:void\b)/,/^(?:main\b)/,/^(?:int\b)/,/^(?:double\b)/,/^(?:boolean\b)/,/^(?:char\b)/,/^(?:String\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:System\b)/,/^(?:out\b)/,/^(?:print\b)/,/^(?:println\b)/,/^(?:break\b)/,/^(?:continue\b)/,/^(?:return\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:for\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:\^)/,/^(?:%)/,/^(?:')/,/^(?:")/,/^(?:\\)/,/^(?:&)/,/^(?:\|)/,/^(?:!)/,/^(?:=)/,/^(?:>)/,/^(?:<)/,/^(?:,)/,/^(?:\.)/,/^(?:;)/,/^(?::)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[0-9]+\b)/,/^(?:\s+)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}