const ModelUser = require('../models/ModelUser');

const MiddlewareAuthenticated = async (req, res, next) => {
    const user = await ModelUser.findById(req.session.user.id )
        if (user) {
            if (req.session.user && user.admin) {
                next();
            } else {
                res.status(401).json({ err: 'user needs to be logged and needs admin ' })
            }
            
        } else {
           res.status(401).json({ err: 'user needs ' })
        }
    

    

}

module.exports = MiddlewareAuthenticated;