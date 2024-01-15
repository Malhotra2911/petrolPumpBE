const { ShiftEntryCollection } = require("../collections");

const addShiftEntry = async (req) => {
    const data = await ShiftEntryCollection.addShiftEntry(req);
    return data;
}

const getShiftEntry = async (req) => {
    const data = await ShiftEntryCollection.getShiftEntry(req);
    return data;
}

const editShiftEntry = async (req) => {
    const data = await ShiftEntryCollection.editShiftEntry(req);
    return data;
}

const deleteShiftEntry = async (req) => {
    const data = await ShiftEntryCollection.deleteShiftEntry(req);
    return data;
}

module.exports = {
    addShiftEntry,
    getShiftEntry,
    editShiftEntry,
    deleteShiftEntry
}