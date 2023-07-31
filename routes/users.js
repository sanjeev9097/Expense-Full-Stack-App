const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/users/signup', usersControllers.newUsers);

router.post('/users/signup', usersControllers.addUsers);

module.exports = router;