const RouteBook = require('./routes/RouteBook');
const express =require('express');
const server = express();

server.use(express.json());

server.use('/',RouteBook);




server.listen('3000');