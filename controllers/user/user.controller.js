const { userService } = require('../../services');

const userController = {
    createUser: async (req, res, next) => {
        try {
            const user = req.body;

            await userService.createUser(user);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },
};

module.exports = userController;
