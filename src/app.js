import Koa from "koa"
import router from "./routers/web"

const app = new Koa();

app.use(router.routes());

module.exports = app;