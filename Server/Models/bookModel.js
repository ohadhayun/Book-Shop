const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jokehSchema = new Schema({
    id: Number,
    image: String,
    bookName: String,
    author : String,
    rating : Number,
    introduction: String,
    price : Number,
    discount : Number,
    category : String,
    stock : String
});

module.exports = mongoose.model('books', jokehSchema);
