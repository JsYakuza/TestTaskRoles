const UserService = require('../services/UserService');

class UserController {
    async submitUser(req, res) {
        const creds = JSON.parse(req.params.creds);
        const result = await UserService.checkUserLogin(creds);
        if (result) {
            res.send(result);
        }
        else {
            res.status(400);
            res.send({});
        }
        res.end();
    }

    async getAll(req, res) {
        const users = await UserService.getAllUsers();
        res.json({ ...users });
    }

    async changeUserRole(req, res) {
        try {
            await UserService.changeRole(JSON.parse(req.params.userInfo));
            res.send();
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    }
}

module.exports = new UserController();