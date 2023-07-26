const express = require("express");
const { createProduct, categoryAll, getDataById } = require("../controller/Post");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/create").post(isAuthenticated,createProduct);
router.route("/category").get(isAuthenticated,categoryAll);
router.route("/categoryId/:id").get(getDataById);



module.exports = router;