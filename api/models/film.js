const mongoose = require('mongoose')

const Film = new mongoose.Schema({
    _id: {type:String},
    name: {type: String},
    gen: {type: String},
    duration: {type: Number} 
});

module.exports = mongoose.model('Film', Film);