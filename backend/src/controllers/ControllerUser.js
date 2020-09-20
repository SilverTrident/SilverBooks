const ModelUser = require('../models/ModelUser');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const authSecret = require('../config/authSecret.json');


function generateToken(params = {}) {
    return JWT.sign(params, authSecret.secret, {
        expiresIn: 172800,
    });
}

class ControllerUser {
    async created(req, res) {
        const user = new ModelUser(req.body);

        await bcrypt.genSalt(15, (erro, salt) => {
            bcrypt.hash(user.password, salt, (erro, hash) => {
                if (erro) {
                    return res.status(400).json({ err: 'email já cadastrado' });
                } else {
                    user.password = hash;
                    user.save()
                        .then(response => {
                            user.password = undefined;
                            user.admin = undefined;

                            return res.status(200).json(
                                {
                                    response,
                                    token: generateToken({ id: response.id })
                                }
                            );
                        })
                        .catch(err => {
                            user.password = undefined;
                            return res.status(500).json(err);
                        })
                }
            })
        })
    }
    async login(req, res) {
        const { email, password } = req.body;
        await (ModelUser.findOne({ email }).select('+password')).then((response) => {
            if (!response) {
                return res.status(401).json({ err: 'usuario não encontrado' })
            } else {
                bcrypt.compare(password, response.password, (err, equal) => {
                    if (equal) {
                        response.password = undefined;
                        response.admin = undefined;

                        return res.status(200).json(
                            {
                                response,
                                token: generateToken({ id: response.id })
                            }
                        );

                    } else {
                        return res.status(400).json({ err: 'senha incorreta' })
                    }
                })
            }
        }).catch(err => {
            return res.status(500).json(err);

        })

    }

}

module.exports = new ControllerUser();



