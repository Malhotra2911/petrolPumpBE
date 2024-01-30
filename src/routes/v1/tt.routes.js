const express = require("express");
const { ttController } = require("../../controllers");
const router = express.Router();
const auth = require("../../middlewares/auth");

// tt
router.route("/add-tt").post(auth, ttController.addTT);
router.route("/get-tt").get(ttController.getTT);
router.route("/edit-tt").put(ttController.editTT);
router.route("/delete-tt").delete(ttController.deleteTT);

module.exports = router;