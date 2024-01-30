const httpStatus = require("http-status");
const { ttService } = require("../services");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const addTT = catchAsync(async (req, res) => {
    const data = await ttService.addTT(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        msg: "Added Successfully",
        data: data
    });
});

const getTT = catchAsync(async (req, res) => {
    const data = await ttService.getTT(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        data: data
    });
});

const editTT = catchAsync(async (req, res) => {
    const data = await ttService.editTT(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        msg: "Updated Successfully",
        data: data
    });
});

const deleteTT = catchAsync(async (req, res) => {
    const data = await ttService.deleteTT(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.status(200).send({
        status: true,
        msg: "Deleted Successfully"
    });
});

module.exports = {
    addTT,
    getTT,
    editTT,
    deleteTT
}