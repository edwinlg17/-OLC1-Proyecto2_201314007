
//////////////////////// imports
const ana1 = require('./anaCom');
const ana2 = require('./anaCom');
const tip = require('./apiJsoCom').tipo;
const ope = require('./apiJsoCom').operacion;
const ins = require('./apiJsoCom').instruccion;

//////////////////////// codigo
// reporte clase copia
var repCalCop = function (tex1, tex2) {
    let ast1 = ana1.parse(tex1);
    let ast2 = ana2.parse(tex2);

    let ret = '////////////// Reporte Clases Copia //////////////\n';

    let con = 0;

    ast1.forEach(ele => {
        if (ele.tip_ins == ins.cla) {
            var cla = busCla(ast2, ele.ide);
            if (cla) {
                var verMMF = true;
                var canmei = 0, canmet = 0, canfun = 0;
                ele.ins.forEach(mmf => {
                    if (mmf.tip_ins == ins.mai) {
                        if (busMai(cla.ins, mmf.tip_ins)) {
                            canmei++;
                        } else {
                            verMMF = false;
                        }
                    } else if (mmf.tip_ins == ins.met) {
                        if (busMet(cla.ins, mmf.tip_ins, mmf.ide, mmf.par)) {
                            canmet++;
                        } else {
                            verMMF = false;
                        }
                    } else if (mmf.tip_ins == ins.fun) {
                        if (busFun(cla.ins, mmf.tip_ins, mmf.tip_ret, mmf.ide, mmf.par)) {
                            canfun++;
                        } else {
                            verMMF = false;
                        }
                    }
                });
                console.log(verMMF + ' ' + canmei + ' ' + canmet + ' ' + canfun);
                if (verMMF) {
                    ret += 'No. ' + con++ + ', clase: ' + ele.ide + ' => # main: ' + canmei + ', # metodos: ' + canmet + ', # funciones: ' + canfun + '\n';
                }
            }
        }
    });

    return ret;
}

// reporte funciones/metodos copia
var repFunCop = function (tex1, tex2) {
    let ast1 = ana1.parse(tex1);
    let ast2 = ana2.parse(tex2);

    let ret = '////////////// Reporte Metodos Copia //////////////\n';

    let con = 0;
    ast1.forEach(ele => {
        if (ele.tip_ins == ins.cla) {
            var cla = busCla(ast2, ele.ide);
            if (cla) {
                ele.ins.forEach(mmf => {
                    if (mmf.tip_ins == ins.met) {
                        if (busMet(cla.ins, mmf.tip_ins, mmf.ide, mmf.par)) {
                            ret += 'No. ' + con++ + ', metodo: ' + mmf.ide + ' => parametros: ' + obtLisPar(mmf.par) + ', clase: ' + ele.ide + '\n';
                        }
                    } else if (mmf.tip_ins == ins.fun) {
                        if (busFun(cla.ins, mmf.tip_ins, mmf.tip_ret, mmf.ide, mmf.par)) {
                            ret += 'No. ' + con++ + ', funcion: ' + mmf.ide + ' => retorno; ' + mmf.tip_ret + ', parametros: ' + obtLisPar(mmf.par) + ', clase: ' + ele.ide + '\n';
                        }
                    }
                });
            }
        }
    });

    return ret;
}

var obtLisPar = function (vec) {
    let par = '';
    vec.forEach(ele => {
        par += ele.tip + ' ' + ele.ide + ' - ';
    });
    return par;
}

var busCla = function (vec, nom) {
    let cla = null;
    vec.forEach(ele => {
        if (ele.tip_ins == ins.cla) {
            if (ele.ide == nom) {
                cla = ele;
            }
        }
    });
    return cla;
}

var busMai = function (vec, tip) {
    let mmf = false;
    vec.forEach(ele => {
        if (ele.tip_ins == tip) {
            mmf = true;
        }
    });
    return mmf;
}

var busMet = function (vec, tip, nom, par) {
    let mmf = false;
    vec.forEach(ele => {
        if (ele.tip_ins == tip) {
            if (ele.ide == nom) {
                if (verPar(ele.par, par)) {
                    mmf = true;
                }
            }
        }
    });
    return mmf;
}

var busFun = function (vec, tip, ret, nom, par) {
    let mmf = false;
    vec.forEach(ele => {
        if (ele.tip_ins == tip) {
            if (ele.tip_ret == ret) {
                if (ele.ide == nom) {
                    if (verPar(ele.par, par)) {
                        mmf = true;
                    }
                }
            }
        }
    });
    return mmf;
}

var verPar = function (vec1, vec2) {
    let par = true;
    if (vec1.length == vec2.length) {
        for (var i = 0; i < vec1.length; i++) {
            if ((vec1[i].tip != vec2[i].tip) || (vec1[i].ide != vec2[i].ide)) {
                par = false;
            }
        }
    } else {
        par = false;
    }
    return par;
}

//////////////////////// exports
exports.repCalCop = function (tex1, tex2) {
    return repCalCop(tex1, tex2);
};

exports.repFunCop = function (tex1, tex2) {
    return repFunCop(tex1, tex2);
};