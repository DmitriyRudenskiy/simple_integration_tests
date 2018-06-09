import Koa from "koa";
import serve from "koa-static";
import bodyParser from "koa-bodyparser";
import router from "./http/routers";

const app = new Koa()
  .use(serve(__dirname + "/../public"))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.message = err.message || "Sorry, an error has occurred.";
  }
});

module.exports = app;

