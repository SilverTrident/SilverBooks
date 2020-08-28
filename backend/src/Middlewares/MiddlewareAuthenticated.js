

const MiddlewareAuthenticated = async(req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        res.status(401).json({err: 'user needs to be logged in'})
    }
}

module.exports = MiddlewareAuthenticated;