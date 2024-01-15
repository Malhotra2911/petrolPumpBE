const config  = require("../config/config");
const jwt = require("jsonwebtoken");

const JWT_SECRET = config.jwt.secret;

const auth = (req, res, next) => {
    const token = req.header('auth-token') || req.body.headers.authToken;
    if (!token) {
        res.status(401).send({error : "Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data;
        next();
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = auth;