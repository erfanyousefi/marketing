const express = require("express");
const router = express.Router();
const api = require('./api/index');

router.use('/api', api);

module.exports = router;