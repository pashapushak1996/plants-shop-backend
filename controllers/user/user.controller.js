const { ErrorHandler } = require('../../errors');
const { userService } = require('../../services');
const { userValidators } = require('../../validators');

const userController = {
    createUser: async (req, res, next) => {
        try {
            const user = req.body;

            const { error } = await userValidators.createUserValidator.validate(user);

            if (error) {
                console.log(error);
                return next(new ErrorHandler(error.details[0].message));
            }

            await userService.createUser(user);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },
};

module.exports = userController;
