const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const ShiftEntryList = sequelize.define(tbl.TBL_SHIFT_ENTRY_LIST, {
    id : {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    shiftEntryId : {
        type: Sequelize.INTEGER(50),
        allowNull: false
    },
    oldCredit : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    oldCollectionName : {
        type: Sequelize.TEXT,
        trim: true,
        allowNull: true
    },
    oldDate : {
        type: Sequelize.DATEONLY,
        trim: true,
        allowNull: true
    },
    newCredit : {
        type: Sequelize.FLOAT(15, 2),
        trim: true,
        allowNull: true,
        defaultValue: 0
    },
    borrowerName : {
        type: Sequelize.TEXT,
        trim: true,
        allowNull: true
    },
    borrowerMobileNo : {
        type: Sequelize.STRING(15),
        trim: true,
        allowNull: true
    } 
});

module.exports = ShiftEntryList