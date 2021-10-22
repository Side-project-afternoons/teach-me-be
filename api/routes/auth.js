const router = require("express").Router();
const authController = require("../controllers/auth");
const { bodyValidation, usernameAvailability, validateUsername } = require("../middleware/auth")

router.post("/register",bodyValidation,usernameAvailability, authController.register);
  
router.post("/login", bodyValidation, validateUsername, authController.login);
  
module.exports = router;