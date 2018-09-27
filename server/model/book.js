'use strict'
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    isbn:String,
    author:String,
    name:String,
    year:String
})

const userBook = mongoose.model('userBook', userSchema);
module.exports = userBook;