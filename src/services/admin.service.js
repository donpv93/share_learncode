const UserModel = require('../models/user.models');
const {verifyToken} = require('../configs/jwt.config');

class Adminservice {
    async getInfor(token) {
        const users = verifyToken(token);
        return users;
    }
}

module.exports = new Adminservice();