const express = require("express");
const router = express.Router();
const SMSPanelCampaignController = require('../../../controllers/marketer/SMSPanelCampaignController')


//shows all sms panel campaigns
router.get('/index',[],SMSPanelCampaignController.index);

//shows marketer's joined sms panel campaigns
router.get('/my',[],SMSPanelCampaignController.my);

router.post('/join-campaign',[],SMSPanelCampaignController.joinCampaign);

router.post('/show/:campaign',[],SMSPanelCampaignController.show);


module.exports = router;