const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const ShiftEntry = sequelize.define(tbl.TBL_SHIFT_ENTRY, {
    id : {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    inDate : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    inTime : {
        type: Sequelize.TIME,
        trim: true,
        allowNull: true
    },
    outDate : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    outTime : {
        type: Sequelize.TIME,
        trim: true,
        allowNull: true
    },
    name : {
        type: Sequelize.TEXT,
        trim: true,
        allowNull: true
    },
    stockOpenMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    stockCloseMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    testingMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    densityMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du1OpenMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du1CloseMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du2OpenMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du2CloseMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du1DiffMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du2DiffMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    meterRateMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    readingCashMS : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    stockOpenHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    stockCloseHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    testingHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    densityHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du1OpenHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du1CloseHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du2OpenHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du2CloseHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du1DiffHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    du2DiffHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    meterRateHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    readingCashHSD : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    phonePe : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    pos : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    totalCash : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    readingCash : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    totalShiftCollection : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    grandTotal : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    remark : {
        type: Sequelize.TEXT,
        trim: true,
        allowNull: true
    },
    ADDED_BY : {
        type: Sequelize.INTEGER(50),
        allowNull: false
    }
});

module.exports = ShiftEntry