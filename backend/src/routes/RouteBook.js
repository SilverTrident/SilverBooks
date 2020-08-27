const ControllerBook = require('../controllers/ControllerBook');
const MiddlewareBook = require('../Middlewares/MiddlewareBook')
const express = require('express');
const { Router } = require('express');
const route = express.Router();

route.post('/',MiddlewareBook,ControllerBook.created);
route.get('/',ControllerBook.listAll)

module.exports = route;