const ControllerUser = require('../controllers/ControllerUser');
const express = require('express');
const route = express.Router();

route.post('/',ControllerUser.created);

module.exports = route;
