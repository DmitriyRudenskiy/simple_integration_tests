import Users from "../../models/users";
import JwtService from "../../services/jwt"

const AuthController = {};

AuthController.signIn = async ctx => {
  const { login, password } = ctx.request.body;

  if (!login || !password) {
    ctx.throw(400, {
      message: "Invalid data login or password"
    });
  }

  const user = await Users.findOne({login});

  if (!user) {
    ctx.throw(400, { message: "User not found" });
  }

  if (!user.checkPassword(password)) {
    ctx.throw(400, { message: "Invalid data" });
  }

  const payload = {
    id: user.id,
    displayName: user.displayName
  };

  //здесь создается JWT
  const token = await JwtService.genToken(payload);
  ctx.body = {user: user.displayName, token: token};
};

export default AuthController;