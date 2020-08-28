const ModelUser = require('../models/ModelUser');

class MiddlewareAuthenticated{
    async admin(req, res, next){
        if (req.session.user) {
            const {admin} = await ModelUser.findById(req.session.user.id);
            if(admin){
                next();
            }else{
                res.status(401).json({ err: 'user needs to admin' })
            }
       
        } else {
            res.status(401).json({ err: 'user needs to be logged in' })
        }
    
    }
    async user(req,res,next){
        if (req.session.user) {
                next();
            
       
        } else {
            res.status(401).json({ err: 'user needs to be logged in' })
        }

    }
}




module.exports = new MiddlewareAuthenticated();

