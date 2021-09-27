const express = require("express");
const router = express.Router();
const product = require('./product')
const link = require('./link')
const SMSProductCampaign = require('./sms_product_campaign')

router.use('/product', product);

router.use('/link', link);

router.use('/sms-panel-campaign', SMSProductCampaign);

//TODO :: BuyLinkCampaign

//TODO :: ShareLinkCampaign

//TODO :: IntroducerCodeCampaign

//TODO :: DiscountCodeCampaign


module.exports = router;