const express = require("express");
const router = express.Router();

router.get('/index');

router.get('/show/:advertise_owner');

router.post('/register/:advertise_owner');

router.post('/ban/:advertise_owner');

router.post('/unban/:advertise_owner');

module.exports = router;