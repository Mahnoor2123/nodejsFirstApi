const mongoose = require('mongoose');


const userModel = new mongoose.Schema({
    name:{
        type: String,
        min: 3,
        max: 25,
        require: true,

    },
    email: {
        type:String,
        require: true,
    },
    password:{
        type:String,
        require:true,

    },
})

module.exports = mongoose.model('user' , userModel)