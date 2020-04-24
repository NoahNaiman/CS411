
/*
 going to create the schema that 
represents our user

TEMPLATE 

NEED TO CHANGE TO SEE WHAT USER INFORMATION WE WANT 
TO STORE IN THE DB
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max:255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6 
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min:6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User',userSchema);