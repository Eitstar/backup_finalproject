const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // minlength: 5
    },
    date: {
        type: Date,
        default: Date.now
    },
});
UserSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', UserSchema)