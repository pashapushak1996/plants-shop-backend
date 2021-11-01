const router = require('express').Router();

const { userController } = require('../../controllers');
const { userMiddleware } = require('../../middlewares');

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    res.json();
});

router.post('/', userMiddleware.checkIsEmailExist, userController.createUser);

// eslint-disable-next-line no-unused-vars
router.put('/', (req, res, next) => {
});

// eslint-disable-next-line no-unused-vars
router.delete('/', (req, res, next) => {
});

module.exports = router;
