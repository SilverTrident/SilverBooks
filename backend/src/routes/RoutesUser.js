const ControllerUser = require('../controllers/ControllerUser');
const MiddlewareUser = require('../Middlewares/MiddlewareUser')
const express = require('express');
const route = express.Router();

route.post('/',MiddlewareUser,ControllerUser.created);
route.post('/login',ControllerUser.login);


module.exports = route;
