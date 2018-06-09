// const jwt = require('koa-jwt');
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'My test'; // config.get('jwt.secret');
import { User } from '../../users';
import jwtService from '../../../services/jwt-service';

const AuthController = {};

/*
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
*/


AuthController.login = async signIn(ctx) {
    const { email, password } = ctx.request.body;

    if (!email || !password) {
        ctx.throw(400, {
            message: 'Invalid data',
        });
    }

    const user = await User.findOne({ email });

    if (!user) {
        ctx.throw(400, {
            message: 'User not found',
        });
    }

    if (!user.comparePasswords(password)) {
        ctx.throw(400, {
            message: 'Invalid data',
        });
    }

    const token = await jwtService.genToken({ email });

    ctx.body = { data: token };
},


export default AuthController;