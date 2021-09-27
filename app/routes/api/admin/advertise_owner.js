const express = require("express");
const router = express.Router();
const AdvertiseOwnerController = require('../../../controllers/admin/AdvertiseOwnerController')

router.get('/index', [], AdvertiseOwnerController.index);

router.post('/register/:advertise_owner', [], AdvertiseOwnerController.register);

router.post('/ban/:advertise_owner', [], AdvertiseOwnerController.ban);

router.post('/unban/:advertise_owner', [], AdvertiseOwnerController.unban);

module.exports = router;