const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //res.send('Hola Mundo');
    res.json({ "var": "valor" });
});

module.exports = router;