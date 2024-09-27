const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true}, 
});

const BookSchema = new mongoose.Schema({
    title: {type: String, require: true},
    author: {type: String, require: true },
    availableCopies: {type: Number, require: true},
});

module.exports = {
    User: mongoose.model('User', UserSchema),
    Book: mongoose.model('Book', BookSchema),
};