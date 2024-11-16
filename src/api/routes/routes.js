const express = require('express');
const userRouter = require('./user.routes');
const router = express.Router();

router.use("/accounts", userRouter);

module.exports = router;