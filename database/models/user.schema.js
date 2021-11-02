const { Schema, model } = require('mongoose');

const { UserRolesEnum } = require('../../constants');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true,
        default: 'pending' // TODO userStatusEnum
    },
    role: {
        type: String,
        required: true,
        default: UserRolesEnum.USER
    },
});

// TODO dbModelsEnum
module.exports = model('users', UserSchema);
