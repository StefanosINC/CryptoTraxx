
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'A user must have a username'], // validator
        // unique: true
    },
    passWord: {
        type: String,
        required: [true, 'A user must have a Password'], // validator
        // unique: true
    },
    firstName: {
        type: String,
        required: [true, 'A user must have a first name'], // validator
        unique: true
    },
    lastName: {
        type: String,
        required: [true, 'A user must have a last name'], // validator
        // unique: true
    },
    email: {
        type: String,
        required: [true, 'A user must have a email'], // validator
        // unique: true
    }
});

// created a tour out of the schema
const User = mongoose.model('User', userSchema); // Use uppercase on model nameand variables
module.exports = User;