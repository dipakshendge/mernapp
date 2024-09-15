let express= require ("express");
let contactRouter = express.Router();
let contactForm = require('../controllers/contact_controller')

contactRouter.route('/contact').post(contactForm)

module.exports = contactRouter