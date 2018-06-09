// const jwt = require('koa-jwt');

const AuthController = {};

AuthController.login = function (ctx) {
    if (ctx.request.body.password !== 'password') {
        ctx.status = ctx.status = 401;
        ctx.body = {
            message: "Authentication failed"
        };

        return ctx;
    }


    //--payload - информация которую мы храним в токене и можем из него получать
    const payload = {
        id: user.id,
        displayName: user.displayName,
        email: user.email
    };

    //здесь создается JWT
    const token = jwt.sign(payload, jwtsecret);

    ctx.body = {user: user.displayName, token: 'JWT ' + token};

    ctx.body = {
        token: jwt.sign({ role: 'admin' }, 'A very secret key'), //Should be the same secret key as the one used is ./jwt.js
        message: "Successfully logged in!"
    };

    return ctx;
}


export default AuthController;