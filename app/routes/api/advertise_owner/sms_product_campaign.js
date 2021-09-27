const express = require("express");
const router = express.Router();
const SMSProductCampaignController = require('../../../controllers/advertise_owner/SMSProductCampaignController')

router.get('/index', [], SMSProductCampaignController.index);

router.get('/show/:product_campaign', [], SMSProductCampaignController.show);

router.post('/create', [], SMSProductCampaignController.create);

router.post('/update/:product_campaign', [], SMSProductCampaignController.update);

router.post('/delete/:product_campaign', [], SMSProductCampaignController.delete);



module.exports = router;