const express = require("express");
const router = express.Router();
const socialMedia = require('./social_media')
const smsPanelCampaign = require('./sms_panel_campaign')


router.use('/social-media', socialMedia);

router.use('/sms-panel-campaign', smsPanelCampaign);


module.exports = router;