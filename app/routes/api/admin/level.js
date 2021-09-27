const express = require("express");
const router = express.Router();
const LevelController = require('../../../controllers/admin/LevelController')
const SMSPanelLevelController = require('../../../controllers/admin/SMSPanelLevelController')
const BuyLinkLevelController = require('../../../controllers/admin/BuyLinkLevelController')
const ShareLinkLevelController = require('../../../controllers/admin/ShareLinkLevelController')
const IntroducerCodeLevelController = require('../../../controllers/admin/IntroducerCodeLevelController')
const DiscountCodeLevelController = require('../../../controllers/admin/DiscountCodeLevelController')


router.get('/index', [], LevelController.index);

router.post('/create', [], LevelController.create);

router.post('/update/:level', [], LevelController.update);

//SMSPanelMarketerLevel
router.get('/sms-panel-level/index', [], SMSPanelLevelController.index);

router.post('/sms-panel-level/create', [], SMSPanelLevelController.create);

router.post('/sms-panel-level/update/:sms_panel_level', [], SMSPanelLevelController.update);

//BuyLinkMarketerLevel
router.get('/buy-link-level/index', [], BuyLinkLevelController.index);

router.post('/buy-link-level/create', [], BuyLinkLevelController.create);

router.post('/buy-link-level/update/:buy_link_level', [], BuyLinkLevelController.update);

//ShareLinkMarketerLevel
router.get('/share-link-level/index', [], ShareLinkLevelController.index);

router.post('/share-link-level/create', [], ShareLinkLevelController.create);

router.post('/share-link-level/update/:share_link_level', [], ShareLinkLevelController.update);

//IntroducerCodeMarketerLevel
router.get('/introducer-code-level/index', [], IntroducerCodeLevelController.index);

router.post('/introducer-code-level/create', [], IntroducerCodeLevelController.create);

router.post('/introducer-code-level/update/:introducer_code_level', [], IntroducerCodeLevelController.update);

//DiscountCodeMarketerLevel
router.get('/discount-code-level/index', [], DiscountCodeLevelController.index);

router.post('/discount-code-level/create', [], DiscountCodeLevelController.create);

router.post('/discount-code-level/update/:discount_code_level', [], DiscountCodeLevelController.update);


module.exports = router;

