const express = require("express");
const router = express.Router();
const SocialMediaController = require('../../../controllers/marketer/SocialMediaController')

router.get('/index', [], SocialMediaController.index);

router.post('/create', [], SocialMediaController.create);

router.post('/update/:social_media', [], SocialMediaController.update);


module.exports = router;