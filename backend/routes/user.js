const express =require("express");
const { register, login } = require ("../controller/User");
const { CartData } = require("../controller/Post");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
module.exports = router;