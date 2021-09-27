const express = require("express");
const router = express.Router();
const MarketerController = require('../../../controllers/admin/MarketerController');


router.get('/index', [], MarketerController.index);

//returns marketer an all of its social media
router.get('/show/:marketer', [], MarketerController.show);

router.post('/register/:marketer/social-media/:social_media', [], MarketerController.registerSocialMedia);

router.post('/register/:marketer', [], MarketerController.register);

router.post('/set-level/:marketer', [], MarketerController.setLevel);

router.post('/ban/:marketer', [], MarketerController.ban);

router.post('/unban/:marketer', [], MarketerController.unban);


module.exports = router;