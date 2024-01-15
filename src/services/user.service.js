const { UserCollection } = require("../collections");

const createUser = async (req) => {
    const data = await UserCollection.createUser(req);
    return data;
};

const loginUser = async (req) => {
    const data = await UserCollection.loginUser(req);
    return data;
}

const getLoggedInUser = async (req) => {
    const data = await UserCollection.getLoggedInUser(req);
    return data;
}

const updateUser = async (req) => {
    const data = await UserCollection.updateUser(req);
    return data;
}

module.exports = {
    createUser,
    loginUser,
    getLoggedInUser,
    updateUser
}