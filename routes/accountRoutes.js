const router = require('express').Router();
const accountAuth = require('../middleware/accountAuth');
const accountController = require('../controllers/account/accountController');

router.get('/keepAlive', accountAuth, accountController.keepAlive);

module.exports = router;
