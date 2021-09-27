const express = require("express");
const router = express.Router();
const SMSPanelCampaignController = require('../../../controllers/user/SMSPanelCampaignController')

router.post('/new-sms',[],SMSPanelCampaignController.newSMS)

module.exports = router;