const express = require('express');
const adminController = require('../controllers/admin_contraller');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminController.Users)
router.route('/contacts').get(authMiddleware, adminController.Contacts);


module.exports = router; 