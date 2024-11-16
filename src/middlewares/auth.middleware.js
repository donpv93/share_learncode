const {verifyToken} = require('../utils/jwt.utils');

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const user = verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalid' });
    }
}

module.exports = authMiddleware;