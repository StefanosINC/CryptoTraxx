
const mongoose = require('mongoose');
const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'A crypto must have a name'], // validator
        // unique: true
    },
    symbol: {
        type: String,
        // required: [true, 'A crypto must have a symbol'], // validator
        // // unique: true
    },
    slug: {
        type: String,
        // required: [true, 'A crypto must have a slug'], // validator
    },
    CMCrank: {
        type: Number,
        // required: [true, 'A crypto must have a CMCRank'], // validator
        // unique: true
    },
    USD: {
        type: Number,
        // required: [true, 'A crypto must have USD'], // validator
        // unique: true
    }
});

// created a tour out of the schema
const crypto = mongoose.model('gcupain', cryptoSchema); // Use uppercase on model nameand variables
module.exports = crypto;