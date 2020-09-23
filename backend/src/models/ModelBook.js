const mongoose = require('../config/database');

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

module.exports = mongoose.model('Book', BookSchema);