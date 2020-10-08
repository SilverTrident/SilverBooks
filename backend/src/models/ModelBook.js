const mongoose = require('../config/database');
var mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
    categories: { type: String, required: true },
    author: { type: String, required: true },
    subDescription: { type: String, required: true },
    description: { type: String, required: true },
    bookLink: { type: String, required: true },
    imgLink: { type: String, required: true },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

BookSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Book', BookSchema);