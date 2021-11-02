const bcrypt = require('bcrypt');

const passwordService = {
    hashPassword: (password) => bcrypt.hash(password, 10),
    comparePassword: async (password, hashPassword) => {
        await bcrypt.compare(password, hashPassword);
    }
};

module.exports = passwordService;
