const MiddlewareBook = require("./MiddlewareBook")

const ModelUser = require('../models/ModelUser');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


const MiddlewareLogin = async (req, res, next) => {

    const authencateHeader = req.headers.authorization;//send headers



    if(!authencateHeader){
        return res.status(401).json({err : 'no token provided'})
    }

    jwt.verify(authencateHeader,authConfig.secret,(err, decoded)=>{
        if(err){
            return res.status(401).json({err : 'invalid  token'});
        }else{
            req.userId = decoded.id;
            return next();
        }
    } )


}

module.exports = MiddlewareLogin;