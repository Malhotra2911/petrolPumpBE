const sequelize = require("../db/db-connection");
module.exports.meterReading = require("./meterReading.model");
module.exports.meterReadingDiesel = require("./meterReadingDiesel.model");
module.exports.shiftEntry = require("./shitftEntry.model");
module.exports.shiftEntryList = require("./shiftEntryList.model");
module.exports.user = require("./user.model");
module.exports.tt = require("./tt.model");

sequelize.sync().then((result) => {
    console.log('data synced')
}).catch((e) => {
    console.log('error in sync', e)
});