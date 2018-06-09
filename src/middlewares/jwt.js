import passport from "koa-passport"
import LocalStrategy from "passport-local"
import JwtStrategy from "passport-jwt"
import ExtractJwt from "passport-jwt"

const koaJwt = require('koa-jwt');

const jwt = require('jsonwebtoken'); // аутентификация по JWT для hhtp

const jwtsecret = "mysecretkey"; // ключ для подписи JWT

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function (email, password, done) {
        User.findOne({email}, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user || !user.checkPassword(password)) {
            return done(null, false, {message: 'Нет такого пользователя или пароль неверен.'});
        }
        return done(null, user);
    });
    }
    )
);


/**
 *
 */
passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: jwtsecret
    }, function (payload, done) {
        User.findById(payload.id, (err, user) => {
            if (err) {
                return done(err)
            }
            if (user) {
                done(null, user)
            } else {
                done(null, false)
    }
    })
    })
);


module.exports = koaJwt({
    secret: 'A very secret key', // Should not be hardcoded
});