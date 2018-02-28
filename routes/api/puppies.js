const express = require("express");
const router = express.Router();
const puppyController = require('./../../controllers/puppyController');

router.get('/', puppyController.index);

module.exports = router;