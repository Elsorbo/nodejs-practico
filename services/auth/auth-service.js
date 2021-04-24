
const jwt = require("jsonwebtoken");

module.exports = {

    generateToken: function (data) {

        return jwt.sign(data, "super-secure-secret");

    }

}
