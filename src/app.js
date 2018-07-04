import Koa from "koa";
import serve from "koa-static";
import bodyParser from "koa-bodyparser";
import router from "./http/routers";
// import ImagesModel from './models/imagesModel.js';

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


/*
ImagesModel.findOne().then(user => {
  console.log(user);
});
*/

module.exports = app;

