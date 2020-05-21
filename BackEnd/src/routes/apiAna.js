
//////////////////////// imports
const ana1 = require('./anaCom');
const ana2 = require('./anaCom');
const tip = require('./apiJsoCom').tipo;
const ope = require('./apiJsoCom').operacion;
const ins = require('./apiJsoCom').instruccion;

//////////////////////// codigo
// reporte clase copia
var repClaCop = function (tex1, tex2) {
    let ast1 = ana1.parse(tex1);
    let ast2 = ana2.parse(tex2);

    let ret = [];

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
                if (verMMF) {
                    ret.push({ no: con++, cla: ele.ide, cmai: canmei, cmet: canmet, cfun: canfun });
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

    let ret = [];

    let con = 0;
    ast1.forEach(ele => {
        if (ele.tip_ins == ins.cla) {
            var cla = busCla(ast2, ele.ide);
            if (cla) {
                ele.ins.forEach(mmf => {
                    if (mmf.tip_ins == ins.met) {
                        if (busMet(cla.ins, mmf.tip_ins, mmf.ide, mmf.par)) {
                            ret.push({ no: con++, tip: mmf.tip_ins, ret: '', nom: mmf.ide, par: obtLisPar(mmf.par), cla: ele.ide });
                        }
                    } else if (mmf.tip_ins == ins.fun) {
                        if (busFun(cla.ins, mmf.tip_ins, mmf.tip_ret, mmf.ide, mmf.par)) {
                            ret.push({ no: con++, tip: mmf.tip_ins, ret: mmf.tip_ret, nom: mmf.ide, par: obtLisPar(mmf.par), cla: ele.ide });
                        }
                    }
                });
            }
        }
    });

    return ret;
}

// reporte variables copia
var repVarCop = function (tex1, tex2) {
    let ast1 = ana1.parse(tex1);
    let ast2 = ana2.parse(tex2);

    let ret = [];

    let con = 0;
    ast1.forEach(ele => {
        if (ele.tip_ins == ins.cla) {
            var cla = busCla(ast2, ele.ide);
            if (cla) {
                ele.ins.forEach(mmf => {
                    if (mmf.tip_ins == ins.mai) {
                        let mtem = busMai(cla.ins, mmf.tip_ins);
                        if (mtem) {
                            mtem.ins.forEach(tdec => {
                                if (tdec.tip_ins == ins.dec) {
                                    tdec.var.forEach(tvar => {
                                        if (busVar(mtem.ins, tdec.tip, tvar.ide)) {
                                            //ret += 'No. ' + con++ + ', tipo: ' + tdec.tip + ', nombre: ' + tvar.ide + ', fun/met: main, clase: ' + ele.ide + '\n';
                                            ret.push({ no: con++, tip: tdec.tip, nom: tvar.ide, mmf: 'main', cla: ele.ide });
                                        }
                                    });
                                }
                            });
                        }
                    } else if (mmf.tip_ins == ins.met) {
                        let mtem = busMet(cla.ins, mmf.tip_ins, mmf.ide, mmf.par);
                        if (mtem) {
                            mtem.ins.forEach(tdec => {
                                if (tdec.tip_ins == ins.dec) {
                                    tdec.var.forEach(tvar => {
                                        if (busVar(mtem.ins, tdec.tip, tvar.ide)) {
                                            //ret += 'No. ' + con++ + ', tipo: ' + tdec.tip + ', nombre: ' + tvar.ide + ', fun/met: ' + mtem.ide + ', clase: ' + ele.ide + '\n';
                                            ret.push({ no: con++, tip: tdec.tip, nom: tvar.ide, mmf: mtem.ide, cla: ele.ide });
                                        }
                                    });
                                }
                            });
                        }
                    } else if (mmf.tip_ins == ins.fun) {
                        let ftem = busFun(cla.ins, mmf.tip_ins, mmf.tip_ret, mmf.ide, mmf.par);
                        if (ftem) {
                            ftem.ins.forEach(tdec => {
                                if (tdec.tip_ins == ins.dec) {
                                    tdec.var.forEach(tvar => {
                                        if (busVar(ftem.ins, tdec.tip, tvar.ide)) {
                                            //ret += 'No. ' + con++ + ', tipo: ' + tdec.tip + ', nombre: ' + tvar.ide + ', fun/met: ' + ftem.ide + ', clase: ' + ele.ide + '\n';
                                            ret.push({ no: con++, tip: tdec.tip, nom: tvar.ide, mmf: ftem.ide, cla: ele.ide });
                                        }
                                    });
                                }
                            });
                        }
                    } else if (mmf.tip_ins == ins.dec) {
                        mmf.var.forEach(tvar => {
                            if (busVar(cla.ins, mmf.tip, tvar.ide)) {
                                //ret += 'No. ' + con++ + ', tipo: ' + mmf.tip + ', nombre: ' + tvar.ide + ', fun/met: Global, clase: ' + ele.ide + '\n';
                                ret.push({ no: con++, tip: mmf.tip, nom: tvar.ide, mmf: 'Global', cla: ele.ide });
                            }
                        });
                    }

                });
            }
        }
    });

    return ret;
}

var busVar = function (vec, tip, nom) {
    let tvar = false;
    vec.forEach(ele => {
        if (ele.tip_ins == ins.dec) {
            if (ele.tip == tip) {
                ele.var.forEach(lide => {
                    if (lide.ide == nom) {
                        tvar = true;
                    }
                });
            }
        }
    });
    return tvar;
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
    let mmf = null;
    vec.forEach(ele => {
        if (ele.tip_ins == tip) {
            mmf = ele;
        }
    });
    return mmf;
}

var busMet = function (vec, tip, nom, par) {
    let mmf = null;
    vec.forEach(ele => {
        if (ele.tip_ins == tip) {
            if (ele.ide == nom) {
                if (verPar(ele.par, par)) {
                    mmf = ele;
                }
            }
        }
    });
    return mmf;
}

var busFun = function (vec, tip, ret, nom, par) {
    let mmf = null;
    vec.forEach(ele => {
        if (ele.tip_ins == tip) {
            if (ele.tip_ret == ret) {
                if (ele.ide == nom) {
                    if (verPar(ele.par, par)) {
                        mmf = ele;
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

var obtLisPar = function (vec) {
    let par = '';
    vec.forEach(ele => {
        par += ele.tip + ' ' + ele.ide + ' - ';
    });
    return par;
}

//////////////////////// exports
exports.repClaCop = function (tex1, tex2) {
    return repClaCop(tex1, tex2);
};

exports.repFunCop = function (tex1, tex2) {
    return repFunCop(tex1, tex2);
};

exports.repVarCop = function (tex1, tex2) {
    return repVarCop(tex1, tex2);
};