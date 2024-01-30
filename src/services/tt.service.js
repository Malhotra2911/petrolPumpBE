const { TTCollection } = require("../collections");

const addTT = async (req) => {
    const data = await TTCollection.addTT(req);
    return data;
}

const getTT = async (req) => {
    const data = await TTCollection.getTT(req);
    return data;
}

const editTT = async (req) => {
    const data = await TTCollection.editTT(req);
    return data;
}

const deleteTT = async (req) => {
    const data = await TTCollection.deleteTT(req);
    return data;
}

module.exports = {
    addTT,
    getTT,
    editTT,
    deleteTT
}