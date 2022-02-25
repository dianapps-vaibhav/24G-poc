const jwt = require('jsonwebtoken');
// const messages = require("../helpers/messages");
// const Constants = require('../helpers/constants');
require('dotenv').config();

const accountAuth = async(req, res, next) => {
    try {
        next()
    } catch (error) {
        console.log('error',error)
        res.status(401).send({status: false,message: messages.notAuthorized});
    }
}

module.exports = accountAuth