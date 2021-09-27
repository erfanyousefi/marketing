const express = require("express");
const router = express.Router();

router.get('/index')

router.post('/create')

router.post('/update/:product_campaign')

router.post('/delete/:product_campaign')



module.exports = router;