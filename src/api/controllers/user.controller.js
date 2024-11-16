const UserServices = require('../../services/user.service');
const httpStatus = require('http-status');


class UserController {
    async register(req, res) {
        const user = await UserServices.register(req.body);
        return res.status(201).send({
            message: 'User created successfully',
            data: user,
            success: true,
        });

    }
    async login(req, res) {
        const { token, user } = await UserServices.login(req.body);
        return res.status(200).send({
            message: 'Login successfully',
            data: user,
            token: token,
            success: true,
        });
    }
}

module.exports = new UserController();