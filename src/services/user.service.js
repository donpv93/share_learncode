const UserModel = require('../models/user.models');

const { generateToken } = require('../configs/jwt.config');

class UserServices {
    async login({ email, password }) {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Password not match');
        }
        const token = generateToken({ id: user._id , role: user.role, email: user.email, name: user.name });
        return { token, user };
    }

    async register(user) {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser;
    }
}

module.exports = new UserServices();