const messages = require('../../helpers/messages');
const responseHandler = require('../../helpers/responseHandler');
// const helper = require("../../helpers/helper");

const keepAlive = async (req, res) => responseHandler(res, false, messages.keepAlive, [], 200);

module.exports = {
  keepAlive,
};
