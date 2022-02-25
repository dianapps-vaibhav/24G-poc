const messages = require('../helpers/messages');

const accountAuth = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    res.status(401).send({ status: false, message: messages.notAuthorized });
  }
};

module.exports = accountAuth;
