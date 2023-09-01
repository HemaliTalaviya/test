var express = require('express');
const {  register_ex, login, logout } = require('../controller/usercontroller');
var router = express.Router();

/* GET home page. */
router.post('/register',register_ex);
router.post('/login',login);
router.post('/logout',logout);


module.exports = router;
