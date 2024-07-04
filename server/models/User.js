const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailId:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    countryCode:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
       
    },
    address:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);