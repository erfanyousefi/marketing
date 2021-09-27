const express = require("express");
const router = express.Router();

router.get('/index');

router.get('/show/:product');

router.post('/create');

router.post('/update/:product');

router.post('/delete/:product');


module.exports = router;