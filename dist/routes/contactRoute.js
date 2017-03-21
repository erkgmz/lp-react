'use strict';

var _express = require('express');

var router = (0, _express.Router)();
var contactController = require('../controllers/contactController.js');

router.route('/').post(contactController.sendMessage);

module.exports = router;
