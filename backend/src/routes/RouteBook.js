const ControllerBook = require('../controllers/ControllerBook');
const MiddlewareBook = require('../Middlewares/MiddlewareBook')
const MiddlewareAuthenticated = require('../Middlewares/MiddlewareAuthenticated')
const express = require('express');

const route = express.Router();

route.post('/admin',MiddlewareAuthenticated.admin,MiddlewareBook,ControllerBook.created);
route.get('/admin',MiddlewareAuthenticated.admin,ControllerBook.listAll);
route.get('/',ControllerBook.listAll);
route.get('/:category',ControllerBook.listCategory);


module.exports = route;