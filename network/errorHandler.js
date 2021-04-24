
const response = require("./response");

function errors(err, req, res, next) {

    response.error(req, res, err.message, err.statusCode);

}

module.exports = errors;
