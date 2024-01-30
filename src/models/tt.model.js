const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const TT = sequelize.define(tbl.TBL_TT, {
    id : {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ttDate : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    invoiceNo : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    ttNo : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    ttLoadMS : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttLoadHSD : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    transporter : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    driverName : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    MPB : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    MOB : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttLoadingDate : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    ttLoadingTime : {
        type: Sequelize.TIME,
        trim: true,
        allowNull: true
    },
    ttUnloadingDate : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    ttUnloadingTime : {
        type: Sequelize.TIME,
        trim: true,
        allowNull: true
    },
    invoiceMS : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    invoiceMSRemark : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    invoiceHSD : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    invoiceHSDRemark : {
        type: Sequelize.STRING(255),
        trim: true,
        allowNull: true
    },
    sampleMSHydro : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    sampleMSTemp : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    sampleMS : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    sampleHSDHydro : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    sampleHSDTemp : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    sampleHSD : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrMSDip : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrMSStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrMSDU1 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrMSDU2 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrHSDDip : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrHSDStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrHSDDU1 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlbrHSDDU2 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarMSDip : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarMSStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarMSDU1 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarMSDU2 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarHSDDip : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarHSDStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarHSDDU1 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    tlarHSDDU2 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ptlarMSStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ptlarMSDU1 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ptlarMSDU2 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ptlarHSDStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ptlarHSDDU1 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ptlarHSDDU2 : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    saleTestingMS : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    saleTestingHSD : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    resultDensityMS : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    resultDensityHSD : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    resultStockMS : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    resultStockHSD : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesMSDU1Sale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesHSDDU1Sale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesMSDU2Sale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesHSDDU2Sale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesMStotalSale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesHSDtotalSale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesMSSale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesHSDSale : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesMSStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
    },
    ttSalesHSDStock : {
        type: Sequelize.FLOAT(10, 2),
        trim: true,
        allowNull: true
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

module.exports = TT