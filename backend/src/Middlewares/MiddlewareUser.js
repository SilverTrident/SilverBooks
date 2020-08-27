const ModelUser = require("../models/ModelUser");


const MiddlewareUserValidation = async (req, res, next) => {
    const {
        name,
        email,
        password
    } = req.body;

    let newEmail = await ModelUser.findOne({
        'email': { '$eq': email }
    })

    if (newEmail) {
        return res.status(400).json({ err: 'email já cadastrado' });
    } else {
        next();
    }
}

module.exports = MiddlewareUserValidation;