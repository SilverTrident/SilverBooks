const ControllerBook = require('../controllers/ControllerBook');
const MiddlewareBook = require('../Middlewares/MiddlewareBook')
const express = require('express');
const route = express.Router();

route.post('/',MiddlewareBook,ControllerBook.created);

module.exports = route;