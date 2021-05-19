const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    // img: String,
    title: String,
    date: String,
    article: String,
});

module.exports = mongoose.model('blog', blogSchema);
