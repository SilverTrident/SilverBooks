const ControllerBook = require('../controllers/ControllerBook');
const MiddlewareBook = require('../Middlewares/MiddlewareBook')
const MiddlewareAuthenticated = require('../Middlewares/MiddlewareAuthenticated')
const express = require('express');
const { Router } = require('express');

const route = express.Router();

route.post('/admin',MiddlewareAuthenticated.admin,MiddlewareBook,ControllerBook.created);
route.delete('/admin/:id',MiddlewareAuthenticated.admin, ControllerBook.delete)
route.put('/admin/:id',MiddlewareAuthenticated.admin,ControllerBook.update)
route.get('/admin/edit/:id',MiddlewareAuthenticated.admin,ControllerBook.listOne)
route.get('/admin/listall',MiddlewareAuthenticated.admin,ControllerBook.listAll);


route.get('/selectedbook/:id', ControllerBook.listOne)
route.get('/',ControllerBook.listAll);
route.get('/:category',ControllerBook.listCategory);


module.exports = route;