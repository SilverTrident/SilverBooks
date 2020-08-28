const ControllerUser = require('../controllers/ControllerUser');
const MiddlewareUser = require('../Middlewares/MiddlewareUser')
const express = require('express');
const route = express.Router();

route.post('/',MiddlewareUser,ControllerUser.created);
route.post('/login',ControllerUser.login);
route.get('/leituras',(req,res)=>{
    req.session.email = "Souzasantos101"
    req.session.nome = "filipe"
    res.send('sessão gerada');
})
route.get('/leitura', (req,res)=>{
    res.json({
        email : req.session.email,
        name : req.session.nome
    })
})


module.exports = route;
