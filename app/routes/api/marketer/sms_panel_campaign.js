const express = require("express");
const router = express.Router();


//shows all sms panel campaigns
router.get('/index');

//shows joined sms panel campaigns
router.get('/my');

router.post('/join-campaign');

router.post('/show/:campaign');


module.exports = router;