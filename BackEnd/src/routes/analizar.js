const { Router } = require('express');
const router = Router();


let cod1 = '', cod2 = '', ast1, ast2, repAST;
let err = [], errLex = [], errSin = [];

// get reporte ast
router.get('/repAST', (req, res) => {
    res.json( repAST );
});

// get errores lexico
router.get('/errLexCon', (req, res) => {
    res.json( errLex );
});

// get errores sintacticos
router.get('/errSinCon', (req, res) => {
    res.json( errSin );
});

// get reporte html
router.get('/repHTML', (req, res) => {
    res.json( err );
});

router.post('/archivo1', (req, res) => {
    cod1 = req.body.val;
    // ast comparacion

    // reportes
    const ana = require('./analizador');
    ana.lim();
    repAST = ana.parse(cod1);
    err = ana.err(); // reporte html
    errLex = ana.errLex(); // reporte consola lexico
    errSin = ana.errSin(); // reporte consola sintactico
    res.json({ var: "archivo 1 recivido" });
});

router.post('/archivo2', (req, res) => {
    cod2 = req.body.val;
    // ast comparacion
    const ana = require('./analizador');
    ast2 = ana.parse(cod2);
    res.json({ var: "archivo 2 recivido" });
});

module.exports = router;