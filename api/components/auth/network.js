
const authRouter = require("express").Router();

const authController = require("./index");
const response = require("../../../network/response");

authRouter.post("/login", authUser);

function authUser(req, res, next) {

    const body = req.body;

    authController.login(body.username, body.password)
        .then( token => response.success(req, res, token))
        .catch( next );

}

module.exports = authRouter;
