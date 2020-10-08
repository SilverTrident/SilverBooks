const ControllerUser = require('../controllers/ControllerUser');
const MiddlewareUser = require('../Middlewares/MiddlewareUser')
const MiddlewareAuthenticated = require('../Middlewares/MiddlewareAuthenticated')

const express = require('express');
const route = express.Router();

route.post('/', ControllerUser.created);
route.post('/login', ControllerUser.login);




module.exports = route;