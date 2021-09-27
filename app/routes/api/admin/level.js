const express = require("express");
const router = express.Router();

router.get('/index');

router.post('/create');

router.post('/update/:level');

//SMSPanelMarketerLevel
router.get('/sms-panel-marketer/index');

router.post('/sms-panel-marketer/create');

router.post('/sms-panel-marketer/update/:sms_panel_marketer');

//BuyLinkMarketerLevel
router.get('/buy-link-marketer/index');

router.post('/buy-link-marketer/create');

router.post('/buy-link-marketer/update/:buy_link_marketer');

//ShareLinkMarketerLevel
router.get('/share-link-marketer/index');

router.post('/share-link-marketer/create');

router.post('/share-link-marketer/update/:share_link_marketer');

//IntroducerCodeMarketerLevel
router.get('/introducer-code-marketer/index');

router.post('/introducer-code-marketer/create');

router.post('/introducer-code-marketer/update/:introducer_code_marketer');

//DiscountCodeMarketerLevel
router.get('/discount-code-marketer/index');

router.post('/discount-code-marketer/create');

router.post('/discount-code-marketer/update/:discount_code_marketer');




module.exports = router;

