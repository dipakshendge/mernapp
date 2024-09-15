const express = require("express");
const router = express.Router();
const service_Controller = require('../controllers/service_controller')


router.route('/service').get(service_Controller);

module.exports = router;