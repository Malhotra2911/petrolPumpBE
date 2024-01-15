const tbl = require("./TableName");
const Sequelize  = require("sequelize");
const sequelize = require("../db/db-connection");

const MeterReadingDiesel = sequelize.define(tbl.TBL_METER_READING_DIESEL, {
    id : {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Date : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    Time : {
        type: Sequelize.TIME,
        trim: true,
        allowNull: true
    },
    Density : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Dip : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    WaterDip : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Stock : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    OpeningStock : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Receipt: {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    TotalStock : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    ClosingStock : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    PhysicalStock : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    StockLossGain : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    CummLossGain : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Nozzle1 : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Nozzle2: {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Nozzle1Diff : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Nozzle2Diff : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    TotalNozzleSales : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Testing : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    ActualNozzleSales : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    CummNozzleSales : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    Remark : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    ADDED_BY : {
        type: Sequelize.INTEGER(50),
        allowNull: false
    }
});

module.exports = MeterReadingDiesel