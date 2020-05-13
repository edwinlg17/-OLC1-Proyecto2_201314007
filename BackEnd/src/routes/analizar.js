const { Router } = require('express');
const router = Router();

var cod1 = '', cod2 = '', ast;

router.get('/', (req, res) => {
    const ana = require('./analizador');
    ast = ana.parse(cod1);
    console.log('->' + ast + '<-');
    res.json({ val: ast });
});

router.post('/', (req, res) => {
    console.log("valor recivido: " + req.body.val);
    if (cod1 == '') {
        cod1 = req.body.val;
    } else if (cod2 == '') {
        cod2 = req.body.val;
    } else {
        cod1 = req.body.val;
        cod2 = '';
    }
    res.json({ var: "repuesta post" });
});

module.exports = router;