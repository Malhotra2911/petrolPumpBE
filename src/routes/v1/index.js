const express = require("express");
const meterRoutes = require("./meter.routes");
const shiftEntryRoutes = require("./shiftEntry.routes");
const userRoutes = require("./user.routes");
const ttRoutes = require('./tt.routes');

const router = express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

router.use('/meter', meterRoutes);
router.use('/shiftEntry', shiftEntryRoutes);
router.use('/user', userRoutes);
router.use('/tt', ttRoutes);

module.exports = router;