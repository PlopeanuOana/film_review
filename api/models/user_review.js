const mongoose = require('mongoose')

const User_Review = new mongoose.Schema({
    id_user: {type: Number},
    id_film: {type: Number},
    review: {type: String} 
});

module.exports = mongoose.model('User_Review', User_Review);