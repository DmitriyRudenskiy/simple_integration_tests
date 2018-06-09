import Koa from "koa";
import serve from "koa-static";
import router from "./routers/web";

const app = new Koa()
  .use(serve(__dirname + "/../public"))
  // ... сначала passport потом маршруты
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