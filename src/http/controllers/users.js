import usersModel from "../models/User";

const Users = {};

Users.getAllUsers = async ctx => {
  const allUsers = await usersModel.findAll();

  ctx.body = allUsers;
};

Users.getUserById = async ctx => {
  const data = JSON.parse(ctx.request.body);
  const user = await usersModel.findById(data.id);

  ctx.body = user;
};

Users.updateUser = async ctx => {
  const user = await usersModel.update(ctx.request.body);

  ctx.body = user;
};

Users.deleteUser = async ctx => {
  await usersModel.destroy();
  ctx.body = "User deleted";
};


Users.getAllUsers = async ctx => {
  const allUsers = await usersModel.findAll();

  ctx.body = allUsers;
};

export default Users;