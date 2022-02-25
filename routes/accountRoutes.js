const router = require('express').Router();
const accountAuth = require('../middleware/accountAuth');

const accountController = require('../controllers/account/accountController.js');

router.post('/keep-alive', accountAuth , accountController.keepAlive);

module.exports = router;