const { Op } = require("sequelize");
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/config');

const JWT_SECRET = config.jwt.secret; 

const TblUser = db.user;

class User {
    createUser = async (req) => {
        try {
            const { username, email, mobileNo, password } = req.body;
            const existData = await TblUser.findOne({
                where : {
                    [Op.or] : [
                        { username : username },
                        { email : email },
                        { mobileNo : mobileNo }
                    ]
                }
            });
            if(existData) {
                return { error: "User Already Exist With This UserName or Email or MobileNo." }
            } 
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const data = await TblUser.create({
                username,
                email,
                mobileNo,
                password : hash
            });
            if(data) {
                return {
                    token : jwt.sign(data.id, JWT_SECRET)
                }
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    loginUser = async (req) => {
        try {
            const { username, password } = req.body;
            const data = await TblUser.findOne({
                where : {
                    [Op.or] : [
                        { username : username },
                        { email : username },
                        { mobileNo : username }
                    ]
                }
            });
            if(!data) {
                return { error: "Please Try To Login With Correct Credentials" }
            }

            const passwordCompare = await bcrypt.compare(password, data.password);
            if(!passwordCompare) {
                return { error: "Please Try To Login With Correct Credentials" }
            }

            if(data && passwordCompare) {
                return {
                    token : jwt.sign(data.id, JWT_SECRET)
                }
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    getLoggedInUser = async (req, res) => {
        try {
            const userId = req.user;
            const data = await TblUser.findOne({
                where : {
                    id : userId
                },
                attributes : ["id", "username", "email", "mobileNo"]
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    updateUser = async (req, res) => {
        try {
            const { id, username, email, mobileNo, password } = req.body;
            if(password) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);

                const data = await TblUser.update(
                    {
                        username : username,
                        email : email,
                        mobileNo : mobileNo,
                        password : hash
                    },
                    {
                        where : {
                            id : id
                        }
                    }
                );
                return data;
            }

            const data = await TblUser.update(
                {
                    username : username,
                    email : email,
                    mobileNo : mobileNo
                },
                {
                    where : {
                        id : id
                    }
                }
            );
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };
}

module.exports = new User();