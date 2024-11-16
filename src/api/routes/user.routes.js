const express = require('express');

const UserController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/login', UserController.login);
userRouter.post('/register', UserController.register);

module.exports = userRouter;