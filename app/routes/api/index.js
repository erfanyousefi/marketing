const express = require("express");
const router = express.Router();
const admin = require('./admin')
const advertiseOwner = require('./advertise_owner')
const marketer = require('./marketer')
const user = require('./user')

router.use('/admin', admin)

router.use('/advertise-owner', advertiseOwner)

router.use('/marketer', marketer)

//for unauthorized users like embedded js
router.use('/', user)


module.exports = router;