
const authRouter = require("express").Router();

const authController = require("./index");
const response = require("../../../network/response");

authRouter.post("/login", authUser);

function authUser(req, res) {

    const body = req.body;

    authController.login(body.username, body.password)
        .then( token => response.success(req, res, token))
        .catch( err => response.error(req, res, err.message, 400));

}

module.exports = authRouter;
