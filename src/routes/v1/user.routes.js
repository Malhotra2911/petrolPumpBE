const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers");
const auth = require("../../middlewares/auth");

// Create User
router.route("/createUser").post(userController.createUser);
router.route("/loginUser").post(userController.loginUser);
router.route("/getLoggedInUser").post(auth, userController.getLoggedInUser);
router.route("/updateUser").put(auth, userController.updateUser);

module.exports = router;