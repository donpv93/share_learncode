const UserServices = require('../../services/user.service');


class UserController {
    async register(req, res) {
        try {
            const user = await UserServices.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async login(req, res) {
        try {
            const { token, user } = await UserServices.login(req.body);
            res.status(200).json({ token, user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new UserController();