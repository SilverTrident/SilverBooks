const ControllerBook = require('../controllers/ControllerBook');
const MiddlewareBook = require('../Middlewares/MiddlewareBook')
const MiddlewareAuthenticated = require('../Middlewares/MiddlewareAuthenticated')
const express = require('express');


const route = express.Router();

route.post('/admin',MiddlewareAuthenticated.auth,MiddlewareBook,ControllerBook.created);
route.delete('/admin/:id',MiddlewareAuthenticated.auth, ControllerBook.delete);
route.put('/admin/:id',MiddlewareAuthenticated.auth,ControllerBook.update);
route.get('/admin/edit/:id',MiddlewareAuthenticated.auth,ControllerBook.listOne);
route.get('/admin/listall',MiddlewareAuthenticated.auth,ControllerBook.listAll);
route.get('/admin/results',MiddlewareAuthenticated.auth,ControllerBook.listFind);
route.get('/admin/listall/:category',MiddlewareAuthenticated.auth,ControllerBook.listCategory);


route.get('/selectedbook/:id', ControllerBook.listOne)
route.get('/',ControllerBook.listAll);
route.get('/results',ControllerBook.listFind);
route.get('/:category',ControllerBook.listCategory);



module.exports = route;