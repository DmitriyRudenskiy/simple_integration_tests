const user = { id: 1, login: 'test', password: 'test' }

const User = {};

User.findOne = function(login) {
    if (login == user.login) {
        return user;
    }

    return null;
};

User.findById = function(userId) {
    if (userId == user.id) {
        return user;
    }

    return null;
};

module.exports = User;