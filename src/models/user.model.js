const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const User = sequelize.define(tbl.TBL_USER, {
    id : {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username : {
        type: Sequelize.STRING(150),
        trim: true,
        unique: true
    },
    email : {
        type: Sequelize.STRING(150),
        trim: true,
        unique: true,
        allowNull: false
    },
    mobileNo : {
        type: Sequelize.STRING(15),
        trim: true,
        unique: true,
        allowNull: false
    },
    password : {
        type: Sequelize.STRING(150),
        trim: true
    }
});

module.exports = User;