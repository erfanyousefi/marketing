const express = require("express");
const router = express.Router();
const SiteInfoController = require('../../../controllers/admin/SiteInfoController')

router.get('/show',[],SiteInfoController.show);

router.post('/create',[],SiteInfoController.create);

router.post('/update',[],SiteInfoController.update);


module.exports = router;