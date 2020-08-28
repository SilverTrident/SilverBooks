const RouteBook = require('./routes/RouteBook');
const RouteUser = require('./routes/RoutesUser')
const express =require('express');
const session =require('express-session');
const server = express();


//configs
server.use(express.json());
server.use(session({
    secret : '2fe619988a70829f1b6cb455cd493905',
    cookie : {maxAge : 60000}
}))


//routes
server.use('/',RouteBook);
server.use('/user',RouteUser);




server.listen('3000');

