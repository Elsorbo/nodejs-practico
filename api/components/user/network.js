
const userRouter = require("express").Router();

const response = require("../../../network/response");
const userController = require("./index");

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", addUser);

function getUsers(req, res) {

    userController.list()
        .then( data => response.success(req, res, data) )
        .catch( error => response.error(req, res, error.message) );
    
}

function getUser(req, res) {

    userController.getUser(req.params.id)
        .then( data => response.success(req, res, data) )
        .catch( error => response.error(req, res, error.message) );
    
}

function addUser(req, res) {

    userController.addUser(req.body)
        .then( user => response.success(req, res, user, 201) )
        .catch( error => response.error(req, res, error.message) );
    
}

module.exports = userRouter;
