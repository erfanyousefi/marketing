const express = require("express");
const router = express.Router();


router.get('/index');

router.get('/show/:marketer');

router.post('/set-level/:marketer');

router.post('/register/:marketer/social-media/:social_media');

router.post('/register/:marketer');

router.post('/ban/:marketer');

router.post('/unban/:marketer');


module.exports = router;