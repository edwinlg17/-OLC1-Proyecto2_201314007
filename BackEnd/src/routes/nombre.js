const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ var: lis });
});

router.post('/', (req, res) => {
    console.log("valor recivido: " + req.body.var);
    lis.push(req.body.var);
    res.json({ var: "recivido" });
});

module.exports = router;