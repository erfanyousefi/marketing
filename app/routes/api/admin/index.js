const express = require("express");
const router = express.Router();
const marketer = require('./marketer')
const advertiseOwner = require('./advertise_owner')
const level = require('./level')
const siteInfo = require('./site_info')
const campaign = require('./campaign')

router.use('/site-info',siteInfo);

router.use('/marketer',marketer);

router.use('/advertise-owner',advertiseOwner);

router.use('/level',level);

router.use('/campaign',campaign);

module.exports = router;