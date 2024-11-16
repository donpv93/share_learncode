const express = require('express');
const userRouter = require('./user.routes');
const adminRouter = require('./admin.routes');
const router = express.Router();

router.use("/accounts", userRouter);
router.use("/admin", adminRouter);

module.exports = router;