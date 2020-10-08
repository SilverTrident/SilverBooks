const mongoose = require('mongoose');

const url = 'mongodb+srv://silver-books:GZ2US6ta7jZ6rp8n@silver-books.wyode.gcp.mongodb.net/silver-books?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;