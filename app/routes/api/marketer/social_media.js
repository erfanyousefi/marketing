const express = require("express");
const router = express.Router();


router.get('/index');

router.post('/create');

router.post('/update/:social_media');


module.exports = router;