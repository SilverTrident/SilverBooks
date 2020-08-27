const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: { type: String, required: true },
    categories: { type: Number, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Book', BookSchema);