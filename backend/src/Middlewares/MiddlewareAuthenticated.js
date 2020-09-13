const ModelUser = require('../models/ModelUser');
const JWT = require('jsonwebtoken');
const authSecret = require('../config/authSecret.json');
const { response } = require('express');
class MiddlewareAuthenticated {

    async auth(req, res, next) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ err: 'no token provided' })
        } else {
            await JWT.verify(token, authSecret.secret, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ er: 'token invalid' })
                } else {


                    ModelUser.findById(decoded.id).then(response => {
                        if(response.admin){
                            req.userId = decoded.id;
                            next();
                        }else{
                            return res.status(401).json({ err: 'user needs to admin' })
                        }
                    }).catch(err => {
                       return res.status(401).json({ er: 'token invalid' })

                    })
                }
            })
        }
    }

}




module.exports = new MiddlewareAuthenticated();

