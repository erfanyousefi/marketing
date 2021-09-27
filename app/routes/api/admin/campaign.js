const express = require("express");
const router = express.Router();
const ProductCampaignController = require('../../../controllers/admin/ProductCampaignController')
const LinkCampaignController = require('../../../controllers/admin/LinkCampaignController')
const DiscountCodeCampaignController = require('../../../controllers/admin/DiscountCodeCampaignController')

//ProductCampaign
router.get('/product-campaign/index', [], ProductCampaignController.index);

router.post('/product-campaign/register/:product_campaign', [], ProductCampaignController.register);

//LinkCampaign
router.get('/link-campaign/index', [], LinkCampaignController.index);

router.post('/link-campaign/register/:link_campaign', [], LinkCampaignController.register);

//DiscountCodeCampaign
router.get('/discount-code-campaign/index', [], LinkCampaignController.index);

router.post('/discount-code-campaign/register/:discount_code_campaign', [], LinkCampaignController.register);


module.exports = router;