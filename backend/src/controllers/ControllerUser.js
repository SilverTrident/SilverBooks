const ModelUser = require('../models/ModelUser');
const bcrypt = require('bcryptjs');


class ControllerUser {
    async created(req, res) {
        const user = new ModelUser(req.body);

        await bcrypt.genSalt(10, (erro, salt) => {
            bcrypt.hash(user.password, salt, (erro, hash) => {
                if (erro) {
                    return res.status(400).json({ err: 'email já cadastrado' });
                } else {
                    user.password = hash;
                    user.save()
                        .then(response => {
                            user.password =undefined;
                            return res.status(200).json(response);
                        })
                        .catch(err => {
                            user.password =undefined;
                            return res.status(500).json(err);
                        })
                }
            })
        })
    }


    async login(req,res){

        await ModelUser.findOne({email : req.body.email}).then((response)=>{
            if(!response){
                return res.status(401).json({ err: 'usuario não encontrado' })
            }else{
                bcrypt.compare(req.body.password, response.password,(err, equal)=>{
                    if(equal){
                        return res.status(200).json(response);
                    }else{
                        return res.status(400).json({ err: 'senha incorreta' })
                    }
                })
            }
        }).catch(err =>{
            return res.status(500).json(err);

        })
    }
}

module.exports = new ControllerUser();



