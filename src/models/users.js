const user = {
  id: 1,
  login: "admin",
  displayName: "Администратор сайта",
  password: "123",
  checkPassword: function(password) {
    return password == this.password;
  }
};

const User = {};

User.findOne = function(obj) {
  console.log(obj);

  if (obj.login == user.login) {
    return user;
  }
};

User.findById = function(userId) {
  if (userId == user.id) {
    return user;
  }
};

module.exports = User;