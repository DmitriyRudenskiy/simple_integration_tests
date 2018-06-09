import Router from "koa-router";

const router = new Router();

router.get("/", async ctx => {
  ctx.redirect("back", "/index.html");
});

router.get("/ping", async ctx => {
  ctx.body = 'pong';
});

module.exports = router;

