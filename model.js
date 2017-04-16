let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201615pachong');
let movieSchema = new mongoose.Schema({
    name:String,
    url:String
});
module.exports.movie=mongoose.model('Movie',movieSchema);