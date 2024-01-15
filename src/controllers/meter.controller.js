const httpStatus = require("http-status");
const { meterService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const addMeterReading = catchAsync(async (req, res) => {
    const data = await meterService.addMeterReading(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        msg: "Added Successfully",
        data: data
    });
});

const getMeterReading = catchAsync(async (req, res) => {
    const data = await meterService.getMeterReading(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        data: data
    });
});

const editMeterReading = catchAsync(async (req, res) => {
    const data = await meterService.editMeterReading(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        msg: "Updated Successfully",
        data: data
    });
});

const deleteMeterReading = catchAsync(async (req, res) => {
    const data = await meterService.deleteMeterReading(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        msg: "Deleted Successfully",
    });
});

const addMeterReadingDiesel = catchAsync(async (req, res) => {
    const data = await meterService.addMeterReadingDiesel(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        msg: "Added Successfully",
        data: data
    });
});

const getMeterReadingDiesel = catchAsync(async (req, res) => {
    const data = await meterService.getMeterReadingDiesel(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        data: data
    });
});

const editMeterReadingDiesel = catchAsync(async (req, res) => {
    const data = await meterService.editMeterReadingDiesel(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        msg: "Updated Successfully",
        data: data
    });
});

const deleteMeterReadingDiesel = catchAsync(async (req, res) => {
    const data = await meterService.deleteMeterReadingDiesel(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong")
    }
    res.status(200).send({
        status: true,
        msg: "Deleted Successfully"
    });
});

module.exports = {
    addMeterReading,
    getMeterReading,
    editMeterReading,
    deleteMeterReading,
    addMeterReadingDiesel,
    getMeterReadingDiesel,
    editMeterReadingDiesel,
    deleteMeterReadingDiesel
}