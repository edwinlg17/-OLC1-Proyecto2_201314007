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
  mayigu: 'mayor_igu',
  menigu: 'menor_igu',

  and: 'and',
  or: 'or',
  not: 'not',

  inc: 'incremento',
  dec: 'decremento',
}

const instruccion = {
  imp: 'import',
  cla: 'class',

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
  ret: 'return'
}

//---------------------- API ----------------------
// CREAR OPERACION
const insAPI = {
  // operacion
  ope: function (valIzq, tip, valDer) {
    return {
      val_izq: valIzq,
      tip: tip,
      val_der: valDer
    }
  },

  // valor
  val: function (tip, val) {
    return {
      tip: tip,
      val: val
    }
  },

  // declaracion
  dec: function (tip, lisVar) {
    return {
      tip_ins: instruccion.dec,
      tip: tip,
      var: lisVar
    }
  },

  // variable
  nueVar: function (ide, exp) {
    return {
      ide: ide,
      exp: exp
    }
  },

  // llamada a funcion
  llaFun: function (ide, par) {
    return {
      tip_ins: tipo.fun,
      ide: ide,
      par: par
    }
  },

  // parametro
  nuePar: function (par) {
    return {
      par: ide
    }
  },

  // asignacion
  asi: function (ide, exp) {
    return {
      tip_ins: instruccion.asi,
      ide: ide,
      exp: exp
    }
  },

  // if
  if: function(con, ins) {
		return {
			tip_ins: instruccion.if,
			con: con,
			ins: ins
		}
  },
  
  // else if
  elsif: function(con, ins) {
		return {
			tip_ins: instruccion.elsif,
			con: con,
			ins: ins
		}
	},

  // else
  els: function(ins) {
		return {
			tip_ins: instruccion.els,
			ins: ins
		}
  },
  
  // switch
  swi: function(exp, ins) {
		return {
			tip_ins: instruccion.swi,
			exp: exp,
			ins: ins
		}
  },

  // case
  cas: function(exp, ins) {
		return {
			tip_ins: instruccion.cas,
			val: exp,
			ins: ins
		}
  },

  // def
  def: function(ins) {
		return {
			tip_ins: instruccion.def,
			ins: ins
		}
  },

  // for
  for: function (vari, con, inc, ins) {
    return {
      tip_ins: instruccion.for,
      var: vari,
      con: con,
      inc: inc,
      ins: ins
    }
  },

  // while
  whi: function (exp, ins) {
    return {
      tip_ins: instruccion.whi,
      exp: exp,
      ins: ins
    };
  },

  do: function (exp, ins) {
    return {
      tip_ins: instruccion.do,
      ins: ins,
      exp: exp
    };
  },

  bre: function () {
    return {
      tip_ins: instruccion.bre
    };
  },

  con: function () {
    return {
      tip_ins: instruccion.con
    };
  },

  ret: function (exp) {
    return {
      tip_ins: instruccion.ret,
      exp: exp
    };
  },

  

  // print
  pri: function (tip, exp) {
    return {
      tip_ins: tip,
      exp: exp
    };
  },



}


//---------------------- EXPORT ----------------------
module.exports.tipo = tipo;
module.exports.operacion = operacion;
module.exports.instruccion = instruccion;
module.exports.insAPI = insAPI;
