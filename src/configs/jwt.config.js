const jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET || "donpv.pv@150493"

const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "1d"

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {generateToken, verifyToken}