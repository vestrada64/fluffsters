const express = require("express");
const router = express.Router();
const puppiesController = require('./../../controllers/puppiesController');

router.get('/', puppiesController.index);

module.exports = router;