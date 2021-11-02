const Joi = require('joi');

const { RegExpEnum, GenderEnum } = require('../../constants');

const createUserValidator = Joi.object({
    name: Joi.string().trim().min(2).max(30)
        .required(),
    surname: Joi.string().min(4).max(30).required(),
    email: Joi.string().trim().regex(RegExpEnum.email).required(),
    password: Joi.string().trim().regex(RegExpEnum.password).required(),
    age: Joi.number().integer().min(6).max(120),
    phone: Joi.string().regex(RegExpEnum.phone).trim(),
    gender: Joi.string().allow(...Object.values(GenderEnum))
});

module.exports = {
    createUserValidator
};
