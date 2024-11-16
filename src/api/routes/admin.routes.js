const express = require('express');

const adminController = require('../controllers/admin.controller');

const adminRouter = express.Router();

adminRouter.get('/infor', adminController.getInfor);

module.exports = adminRouter;