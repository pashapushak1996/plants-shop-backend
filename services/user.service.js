const { UserModel } = require('../database');

const userService = {
    createUser: (user) => {
        const User = new UserModel(user);

        return User.save();
    },

    findOneByParams: (param) => {
        return UserModel.findOne(param).exec();
    }
};

module.exports = userService;
