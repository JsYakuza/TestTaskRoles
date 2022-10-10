const db = require('../models/index');
const { comparePassword } = require('../tools/password');

class UserService {
    async checkUserLogin({ login, password }) {
        const user = await db.Users.findOne({ where: { login } });
        if (user) {
            const checkPassword = await comparePassword(password, user.password);
            const { id, login, role } = user;
            return checkPassword ? { id, login, role } : null;
        }
        return false;
    }

    async getAllUsers() {
        const res = await db.Users.findAll({
            attributes: ['id', 'login', 'role'],
        })
        return res;
    }

    async changeRole(info) {
        const { login, newRole } = info;
        await db.Users.update({ role: newRole }, { where: { login } })
    }
}

module.exports = new UserService();