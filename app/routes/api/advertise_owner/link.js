const express = require("express");
const router = express.Router();


router.get('/index');

router.get('/show/:link');

router.post('/create');

router.post('/update/:link');

router.post('/delete/:link');


module.exports = router;