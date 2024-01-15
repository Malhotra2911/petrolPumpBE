const httpStatus = require("http-status");
const { shiftEntryService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const addShiftEntry = catchAsync(async (req, res) => {
    const data = await shiftEntryService.addShiftEntry(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        msg: "Added Successfully",
        data: data
    });
});

const getShiftEntry = catchAsync(async (req, res) => {
    const data = await shiftEntryService.getShiftEntry(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        data: data
    });
});

const editShiftEntry = catchAsync(async (req, res) => {
    const data = await shiftEntryService.editShiftEntry(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        msg: "Updated Successfully",
        data: data
    });
});

const deleteShiftEntry = catchAsync(async (req, res) => {
    const data = await shiftEntryService.deleteShiftEntry(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        msg: "Deleted Successfully",
        data: data
    });
});

module.exports = {
    addShiftEntry,
    getShiftEntry,
    editShiftEntry,
    deleteShiftEntry
}