const RouteBook = require('./routes/RouteBook');
const RouteUser = require('./routes/RoutesUser')
const express =require('express');
const server = express();

//configs
server.use(express.json());


//routes
server.use('/',RouteBook);
server.use('/user',RouteUser);




server.listen('3000');