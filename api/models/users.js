const mongoose = require('mongoose')

const User = new mongoose.Schema({
    _id: {type:String},
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number},
    preferences: {type: String} 
});

module.exports = mongoose.model('User', User);