import Koa from "koa"
import serve from "koa-static"
//import bodyParser from "koa-bodyparser"
import router from "./routers/web"
import passport from "koa-passport"
import koaBody from "koa-body"
// import jwt from "./middlewares/jwt"

const app = new Koa()
    .use(serve(__dirname + '/../public'))
    //.use(bodyParser({ multipart: true }))
    .use(koaBody({
        formidable:{uploadDir: __dirname + '/../public'},    //This is where the files would come
        multipart: true
    }))
    .use(passport.initialize()) // сначала passport
    .use(router.routes()) // потом маршруты
    .use(router.allowedMethods())

// custom 404
app.use(async function(ctx, next) {
    await next();
    if (ctx.body || !ctx.idempotent) return;
    ctx.redirect('/404.html');
});

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.message = err.message || "Sorry, an error has occurred.";
    }
});

module.exports = app;