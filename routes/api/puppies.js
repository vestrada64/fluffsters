const express = require("express");
const router = express.Router();
const puppiesController = require('./../../controllers/puppiesController');

router.get('/', checkAuth, puppiesController.index);
router.post('/', isLoggedIn, puppiesController.create);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
}

function isLoggedIn(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;

