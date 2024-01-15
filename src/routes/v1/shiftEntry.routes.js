const express = require("express");
const { shiftEntryController } = require("../../controllers");
const router = express.Router();
const auth = require("../../middlewares/auth");

// shift entry
router.route("/add-shiftEntry").post(auth, shiftEntryController.addShiftEntry);
router.route("/get-shiftEntry").get(shiftEntryController.getShiftEntry);
router.route("/edit-shiftEntry").put(shiftEntryController.editShiftEntry);
router.route("/delete-shiftEntry").delete(shiftEntryController.deleteShiftEntry);

module.exports = router;