const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ var: "repuesta get" });
});

router.post('/', (req, res) => {
    console.log("valor recivido: " + req.body.var);
    res.json({ var: "repuesta post" });
});

module.exports = router;