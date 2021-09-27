const express = require("express");
const router = express.Router();
const SocialMediaController = require('../../../controllers/marketer/SocialMediaController')


//shows all sms panel campaigns
router.get('/index',[],SocialMediaController.index);

//shows marketer's joined sms panel campaigns
router.get('/my',[],SocialMediaController.my);

router.post('/join-campaign',[],SocialMediaController.joinCampaign);

router.post('/show/:campaign',[],SocialMediaController.show);


module.exports = router;