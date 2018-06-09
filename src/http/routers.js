import Router from "koa-router";
import AuthController from "./controllers/auth";

const router = new Router();

router.get("/", async ctx => {
  ctx.redirect("back", "/index.html");
});

router.get("/ping", async ctx => {
  ctx.body = "pong";
});

router.post("/login", AuthController.signIn);

export default router;
