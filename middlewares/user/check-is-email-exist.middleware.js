const { responseStatusCodesEnum } = require('../../constants');
const { ErrorHandler } = require('../../errors');
const { userService } = require('../../services');

const checkIsEmailExistMiddleware = async (req, res, next) => {
    const { email } = req.body;
    const userByEmail = await userService.findOneByParams({ email });

    // TODO customErrorsEnum

    if (userByEmail) {
        return next(new ErrorHandler(responseStatusCodesEnum.BAD_REQUEST));
    }

    next();
};

module.exports = checkIsEmailExistMiddleware;
