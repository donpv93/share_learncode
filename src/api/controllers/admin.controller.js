const adminService = require('../../services/admin.service');

class AdminController {
    async getInfor(req, res) {
        try {
            let token = req.header('Authorization');
            if (!token) {
                res.status(401).send('Token is required');
            }
            console.log(req.header('Authorization'));
            token = token.replace('Bearer ', '');
            const infor = await adminService.getInfor(token);
            res.send(infor);
        } catch (error) {
            res.status(500).send;
        }
    }
}

module.exports = new AdminController();