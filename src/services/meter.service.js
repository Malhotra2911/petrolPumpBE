const { MeterCollection } = require("../collections");

const addMeterReading = async (req) => {
    const data = await MeterCollection.addMeterReading(req);
    return data;
}

const getMeterReading = async (req) => {
    const data = await MeterCollection.getMeterReading(req);
    return data;
}

const editMeterReading = async (req) => {
    const data = await MeterCollection.editMeterReading(req);
    return data;
}

const deleteMeterReading = async (req) => {
    const data = await MeterCollection.deleteMeterReading(req);
    return data;
}

const addMeterReadingDiesel = async (req) => {
    const data = await MeterCollection.addMeterReadingDiesel(req);
    return data;
}

const getMeterReadingDiesel = async (req) => {
    const data = await MeterCollection.getMeterReadingDiesel(req);
    return data;
}

const editMeterReadingDiesel = async (req) => {
    const data = await MeterCollection.editMeterReadingDiesel(req);
    return data;
}

const deleteMeterReadingDiesel = async (req) => {
    const data = await MeterCollection.deleteMeterReadingDiesel(req);
    return data;
}

const getStockFromDip = async (req) => {
    const data = await MeterCollection.getStockFromDip(req);
    return data;
}

module.exports = {
    addMeterReading,
    getMeterReading,
    editMeterReading,
    deleteMeterReading,
    addMeterReadingDiesel,
    getMeterReadingDiesel,
    editMeterReadingDiesel,
    deleteMeterReadingDiesel,
    getStockFromDip
}