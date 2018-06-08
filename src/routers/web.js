import Router from "koa-router"

const router = new Router();

router.get("/", async ctx => {
    ctx.body = 'Hello Koa'
})


router.get("/ping", async ctx => {
    ctx.body = {
        data: "Sending some JSON v2"
    };
})

module.exports = router;