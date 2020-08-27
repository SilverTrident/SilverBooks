const ModelUser = require('../models/ModelUser');

class ControllerUser {
    async created(req, res) {
        const user = new ModelUser(req.body);
        await user.save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            })
    }
}

module.exports = new ControllerUser();