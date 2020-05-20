const { Router } = require('express');
const router = Router();
const ana = require('./analizador');
const rep = require('./apiAna');

let cod1 = '', cod2 = '', repAST;
let err = [], errLex = [], errSin = [];

//////////////////////// ERRORES GET
// get errores lexico
router.get('/errLexCon', (req, res) => {
    res.json(errLex);
});

// get errores sintacticos
router.get('/errSinCon', (req, res) => {
    res.json(errSin);
});

//////////////////////// REPORTES GET
// get reporte html
router.get('/repHTML', (req, res) => {
    res.json(err);
});

// get reporte clase copia
router.get('/repClaCop', (req, res) => {
    res.json({ rep: rep.repCalCop(cod1, cod2) });
});

// get reporte funciones/metodos copia
router.get('/repFunCop', (req, res) => {
    res.json({ rep: rep.repFunCop(cod1, cod2) });
});

// get reporte ast
router.get('/repAST', (req, res) => {
    res.json(repAST);
});

//////////////////////// ARCHIVOS POST
// archivo 1
router.post('/archivo1', (req, res) => {
    cod1 = req.body.val;
    // reportes 

    ana.lim();
    repAST = ana.parse(cod1);
    err = ana.err(); // reporte html
    errLex = ana.errLex(); // reporte consola lexico
    errSin = ana.errSin(); // reporte consola sintactico
    res.json({ var: "archivo 1 recivido" });
});

// archivo 2
router.post('/archivo2', (req, res) => {
    cod2 = req.body.val;
    res.json({ var: "archivo 2 recivido" });
});


//////////////////////// EXPORTS
module.exports = router;