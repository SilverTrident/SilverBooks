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
    async listCategory(req,res){
        await ModelBook.find({
            'categories':{'$in':req.params.category}
        }). sort('createdAt').
        then(response => {
            return res.status(200).json(response);
        }
        ).catch(err => {
            return res.status(500).json(err);
        });
    }
    async listOne(req,res){
        await ModelBook.findById(req.params.id).
        then(response => {
            if (response) {
                return res.status(200).json(response);
            } else {
                return res.status(404).json({ err: 'book not found' });
            }

        }
        ).catch(err => {
            return res.status(500).json({ err: 'book not found'});
        })
    }
    async update(req,res){
        await ModelBook.findOneAndUpdate(
            {'_id' : req.params.id},
            req.body,
            {new : true}).
            then((response)=>{
                return res.status(200).json(response);
            }).catch(err => {
                return res.status(500).json(err);
            });
    }
    async delete(req, res) {
        await ModelBook.deleteOne({ '_id': req.params.id }).
            then(response => {
                if (response) {
                    return res.status(200).json(response);
                } else {
                    return res.status(404).json({ err: 'book not found' });
                }
            }
            ).catch(err => {
                return res.status(500).json({ err: 'book not found' });
            })
    }

}

module.exports = new ControllerBook();
