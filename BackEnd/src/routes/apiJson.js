//---------------------- CONSTANTES ----------------------
const tipo = {
  int: 'int',
  dou: 'double',
  cha: 'char',
  str: 'string',
  boo: 'boolean',
  ide: 'identificador',
  fun: 'funcion'
}

const operacion = {
  sum: 'suma',
  res: 'resta',
  mul: 'multiplicacion',
  div: 'divicion',
  pot: 'potencia',
  mod: 'modulo',
  neg: 'negativo',

  igu: 'igual',
  dif: 'diferente',
  may: 'mayor',
  men: 'menor',
  mayigu: 'mayor_igual',
  menigu: 'menor_igual',

  and: 'and',
  or: 'or',
  not: 'not',

  inc: 'incremento',
  dec: 'decremento',
}

const instruccion = {
  imp: 'import',
  cla: 'class',

  mai: 'main',
  fun: 'funcion',
  met: 'metodo',

  dec: 'declaracion',
  asi: 'asignacion',

  if: 'if',
  elsif: 'else_if',
  els: 'else',
  swi: 'switch',
  cas: 'case',
  def: 'default',

  for: 'for',
  whi: 'while',
  do: 'do',

  pri: 'print',
  priln: 'println',

  bre: 'break',
  con: 'continue',
  ret: 'return',

  ins: 'instrucciones',
  par: 'parametros',
  exp: 'exprecion',
  con: 'condicion',
  ope: 'operacion',
  var: 'variable',
  vars: 'variables',
  els: 'else',
  insIf: 'ins_if'
}

//---------------------- API ----------------------
// CREAR OPERACION
const insAPI = {
  // operacion Binaria
  ope: function (valIzq, tip, valDer) {
    return {
      //val_izq: valIzq,
      //tip: tip,
      //val_der: valDer
      'text': tip,
      'icon': './img/ins.png',
      'children': [
        valIzq,
        valDer
      ]
    }
  },

  // operacion Unaria
  opeUna: function (tip, val) {
    return {
      //val: val,
      //tip: tip
      'text': tip,
      'icon': './img/ins.png',
      'children': [
        val
      ]
    }
  },

  // declaracion
  dec: function (tip, lisVar) {
    return {
      //tip_ins: instruccion.dec,
      //tip: tip,
      //var: lisVar
      'text': instruccion.dec,
      'icon': './img/ins.png',
      'children': [
        {
          'text': tip,
          'icon': './img/atr.png'
        },
        {
          'text': instruccion.vars,
          'icon': './img/subins.png',
          'children': lisVar
        }
      ]
    }
  },

  // asignacion
  asi: function (ide, exp) {
    return {
      //tip_ins: instruccion.asi,
      //ide: ide,
      //exp: exp
      'text': instruccion.asi,
      'icon': './img/ins.png',
      'children': [
        {
          'text': ide,
          'icon': './img/atr.png'
        },
        {
          'text': instruccion.exp,
          'icon': './img/subins.png',
          'children': [exp]
        }
      ]
    }
  },

  // variable
  nueVar: function (ide, exp) {
    return {
      //ide: ide,
      //exp: exp
      'text': instruccion.var,
      'icon': './img/ins.png',
      'children': [
        {
          'text': ide,
          'icon': './img/atr.png'
        },
        {
          'text': instruccion.exp,
          'icon': './img/subins.png',
          'children': [exp]
        }
      ]
    }
  },

  // llamada a funcion
  llaFun: function (ide, par) {
    return {
      //tip_ins: tipo.fun,
      //ide: ide,
      //par: par
      'text': instruccion.fun,
      'icon': './img/ins.png',
      'children': [
        {
          'text': ide,
          'icon': './img/atr.png'
        },
        {
          'text': instruccion.par,
          'icon': './img/subins.png',
          'children': par
        }
      ]
    }
  },

  // parametro
  nuePar: function (par) {
    return {
      par: par
    }
  },

  /////////////////////////////////// CONDICIONALES ///////////////////////////////////
  insIf: function (varif) {

    return {
      //tip_ins: instruccion.if,
      //con: con,
      //ins: ins
      'text': instruccion.insIf,
      'icon': './img/ins.png',
      'children': varif
    }
  },

  // if
  if: function (con, ins) {

    return {
      //tip_ins: instruccion.if,
      //con: con,
      //ins: ins
      'text': instruccion.if,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.con,
          'icon': './img/subins.png',
          'children': [con]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  // else if
  elsif: function (con, ins) {
    return {
      //tip_ins: instruccion.elsif,
      //con: con,
      //ins: ins
      'text': instruccion.elsif,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.con,
          'icon': './img/subins.png',
          'children': [con]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  // else
  els: function (ins) {
    return {
      //tip_ins: instruccion.els,
      //ins: ins
      'text': instruccion.els,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  // switch
  swi: function (exp, ins) {
    return {
      //tip_ins: instruccion.swi,
      //exp: exp,
      //ins: ins
      'text': instruccion.swi,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.exp,
          'icon': './img/subins.png',
          'children': [exp]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  // case
  cas: function (exp, ins) {
    return {
      //tip_ins: instruccion.cas,
      //val: exp,
      //ins: ins
      'text': instruccion.cas,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.exp,
          'icon': './img/subins.png',
          'children': [exp]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  // def
  def: function (ins) {
    return {
      //tip_ins: instruccion.def,
      //ins: ins
      'text': instruccion.def,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  /////////////////////////////////// CICLOS ///////////////////////////////////
  // for
  for: function (vari, con, inc, ins) {
    return {
      //tip_ins: instruccion.for,
      //var: vari,
      //con: con,
      //inc: inc,
      //ins: ins
      'text': instruccion.for,
      'icon': './img/ins.png',
      'children': [
        vari,
        {
          'text': instruccion.con,
          'icon': './img/subins.png',
          'children': [con]
        },
        {
          'text': instruccion.exp,
          'icon': './img/subins.png',
          'children': [inc]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    }
  },

  // while
  whi: function (con, ins) {
    return {
      //tip_ins: instruccion.whi,
      //con: con,
      //ins: ins
      'text': instruccion.whi,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.con,
          'icon': './img/subins.png',
          'children': [con]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]

    };
  },

  do: function (con, ins) {
    return {
      //tip_ins: instruccion.do,
      //ins: ins,
      //exp: exp
      'text': instruccion.do,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.con,
          'icon': './img/subins.png',
          'children': [con]
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    };
  },

  // break
  bre: function () {
    return {
      //tip_ins: instruccion.bre
      'text': instruccion.bre,
      'icon': './img/ins.png'
    };
  },

  // continue
  con: function () {
    return {
      //tip_ins: instruccion.con
      'text': instruccion.con,
      'icon': './img/ins.png'
    };
  },

  // return
  ret: function (exp) {
    return {
      //tip_ins: instruccion.ret,
      //exp: exp
      'text': instruccion.ret,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.exp,
          'icon': './img/atr.png',
          'children':[exp]
        }
      ]
    };
  },

  // print
  pri: function (tip, exp) {
    return {
      //tip_ins: tip,
      //exp: exp
      'text': tip,
      'icon': './img/ins.png',
      'children': [
        {
          'text': exp,
          'icon': './img/atr.png'
        }
      ]
    };
  },

  /////////////////////////////////// METODOS Y FUNCIONES ///////////////////////////////////
  // main
  mai: function (ins) {
    return {
      //tip_ins: instruccion.mai,
      //ins: ins
      'text': instruccion.mai,
      'icon': './img/ins.png',
      'children': [
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]

    };
  },

  // met
  met: function (ide, par, ins) {
    return {
      //tip_ins: instruccion.met,
      //ide: ide,
      //par: par,
      //ins: ins
      'text': instruccion.met,
      'icon': './img/ins.png',
      'children': [
        {
          'text': ide,
          'icon': './img/atr.png',
        },
        {
          'text': instruccion.par,
          'icon': './img/subins.png',
          'children': par
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    };
  },

  // fun
  fun: function (tip, ide, par, ins) {
    return {
      //tip_ins: instruccion.fun,
      //tip_ret: tip,
      //ide: ide,
      //par: par,
      //ins: ins
      'text': instruccion.fun,
      'icon': './img/ins.png',
      'children': [
        {
          'text': tip,
          'icon': './img/atr.png',
        },
        {
          'text': ide,
          'icon': './img/atr.png',
        },
        {
          'text': instruccion.par,
          'icon': './img/subins.png',
          'children': par
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]
    };
  },

  // declaracion de parametros
  decPar: function (tip, ide) {
    return {
      //tip: tip,
      //ide: ide
      'text': tip,
      'icon': './img/tip.png',
      'children': [
        {
          'text': ide,
          'icon': './img/atr.png',
        }
      ]
    };
  },

  /////////////////////////////////// CLASES FUNCIONES ///////////////////////////////////
  cla: function (ide, ins) {
    return {
      //tip_ins: instruccion.cla,
      //ide: ide,
      //ins: ins
      'text': instruccion.cla,
      'icon': './img/ins.png',
      'children': [
        {
          'text': ide,
          'icon': './img/atr.png',
        },
        {
          'text': instruccion.ins,
          'icon': './img/subins.png',
          'children': ins
        }
      ]

    };
  },

  imp: function (ide) {
    return {
      //tip_ins: instruccion.imp,
      //ide: ide
      'text': instruccion.imp,
      'icon': './img/ins.png',
      'children': ide
    };
  },

  // valor
  val: function (tip, val) {
    return {
      //tip: tip,
      //val: val
      'text': tip,
      'icon': './img/tip.png',
      'children': [
        {
          'text': val,
          'icon': './img/atr.png',
        }
      ]
    }
  }
}


//---------------------- EXPORT ----------------------
module.exports.tipo = tipo;
module.exports.operacion = operacion;
module.exports.instruccion = instruccion;
module.exports.insAPI = insAPI;
