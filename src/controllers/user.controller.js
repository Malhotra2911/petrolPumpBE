const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const createUser = catchAsync(async (req, res) => {
    const data = await userService.createUser(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.send({
        status: true,
        msg: data.error ? data.error : "User Created Successfully",
        user: data
    });
});

const loginUser = catchAsync(async (req, res) => {
    const data = await userService.loginUser(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.send({
        status: true,
        msg: data.error ? data.error : "User Loggedin Successfully",
        user: data
    });
});

const getLoggedInUser = catchAsync(async (req, res) => {
    const data = await userService.getLoggedInUser(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.send({
        status: true,
        msg: data.error ? data.error : "",
        user: data
    });
});

const updateUser = catchAsync(async (req, res) => {
    const data = await userService.updateUser(req);
    if(!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "!Something Went Wrong");
    }
    res.send({
        status : true,
        msg: data.error ? data.error : "Updated Successfully",
        user: data
    });
});

module.exports = {
    createUser,
    loginUser,
    getLoggedInUser,
    updateUser
}