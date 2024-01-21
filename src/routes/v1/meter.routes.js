const express = require("express");
const { meterController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const router = express.Router();

// petrol
router.route("/add-meterReading").post(auth, meterController.addMeterReading);
router.route("/get-meterReading").get(meterController.getMeterReading);
router.route("/edit-meterReading").put(meterController.editMeterReading);
router.route("/delete-meterReading").delete(meterController.deleteMeterReading);
router.route("/get-stockFromDip").get(meterController.getStockFromDip);

// diesel
router.route("/add-meterReadingDiesel").post(auth, meterController.addMeterReadingDiesel);
router.route("/get-meterReadingDiesel").get(meterController.getMeterReadingDiesel);
router.route("/edit-meterReadingDiesel").put(meterController.editMeterReadingDiesel);
router.route("/delete-meterReadingDiesel").delete(meterController.deleteMeterReadingDiesel);

module.exports = router;