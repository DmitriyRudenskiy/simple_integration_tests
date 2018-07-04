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


/**
 const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

 // force: true will drop the table if it already exists
 User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
 */