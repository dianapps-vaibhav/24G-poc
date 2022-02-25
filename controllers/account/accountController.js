const messages = require("../../helpers/messages");
const responseHandler = require("../../helpers/responseHandler");
// const helper = require("../../helpers/helper");

const keepAlive = async (req, res) => {
  return responseHandler(res, false, messages.keepAlive, [], 200);
}

module.exports = {
  keepAlive
};