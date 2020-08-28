const ControllerUser = require('../controllers/ControllerUser');
const MiddlewareUser = require('../Middlewares/MiddlewareUser')
const MiddlewareAuthenticated = require('../Middlewares/MiddlewareAuthenticated')

const express = require('express');
const route = express.Router();

route.post('/',MiddlewareUser,ControllerUser.created);
route.post('/login',ControllerUser.login);
route.get('/logout',MiddlewareAuthenticated.admin,ControllerUser.logout);



module.exports = route;
