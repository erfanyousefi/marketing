const express = require("express");
const router = express.Router();

//ProductCampaign
router.get('/product-campaign/index');

router.post('/product-campaign/register/:product_campaign');

//LinkCampaign
router.get('/link-campaign/index');

router.post('/link-campaign/register/:link_campaign');

//DiscountCodeCampaign
router.get('/discount-code-campaign/index');

router.post('/discount-code-campaign/register/:discount_code_campaign');


module.exports = router;