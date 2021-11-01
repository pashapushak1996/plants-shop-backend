const { Schema, model } = require('mongoose');

const { userRolesEnum } = require('../../constants');

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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: false
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
        default: userRolesEnum.USER
    }
});

// TODO dbModelsEnum
module.exports = model('users', UserSchema);
