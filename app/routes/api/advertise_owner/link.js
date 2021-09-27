const express = require("express");
const router = express.Router();
const LinkController = require('../../../controllers/advertise_owner/LinkController')

router.get('/index', [], LinkController.index);

router.get('/show/:link', [], LinkController.show);

router.post('/create', [], LinkController.create);

router.post('/update/:link', [], LinkController.update);

router.post('/delete/:link', [], LinkController.delete);


module.exports = router;