let express= require ("express");
let router = express.Router();
let auth_controller = require ("../controllers/auth_controller")
const {signupSchema, loginSchema} = require('../validators/auth_validator');
const validate = require('../middlewares/validate_middleware')
const authMiddleware = require('../middlewares/authMiddleware')

router.route('/').get(auth_controller.home);
router.route('/register').post(validate(signupSchema), auth_controller.register)
router.route('/login').post(validate(loginSchema), auth_controller.login);
router.route('/user').get(authMiddleware,auth_controller.user);
// router.route('/services').get(service_cont.user);

module.exports =router;