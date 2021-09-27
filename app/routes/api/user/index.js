const express = require("express");
const router = express.Router();
const smsPanelCampaign = require('./sms_panel_campaign')


router.post('/sms-panel-campaign', smsPanelCampaign);


module.exports = router;