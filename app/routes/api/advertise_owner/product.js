const express = require("express");
const router = express.Router();
const ProductController = require('../../../controllers/advertise_owner/ProductController')

router.get('/index', [], ProductController.index);

router.get('/show/:product', [], ProductController.show);

router.post('/create', [], ProductController.create);

router.post('/update/:product', [], ProductController.update);

router.post('/delete/:product', [], ProductController.delete);


module.exports = router;