const ModelBook = require('../models/ModelBook');





class ControllerBook {
    async created(req, res) {
        const book = new ModelBook(req.body);
        await book
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(err => {
                return res.status(500).json(err);
            })
    }
    async listAll(req,res){
        await ModelBook.find().
        sort('createdAt').
        then( response =>{
            return res.status(200).json(response);
        }).
        catch(err => {
            return res.status(500).json(err);
        }) 
    }
}

module.exports = new ControllerBook();
