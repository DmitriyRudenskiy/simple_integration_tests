import Router from "koa-router"

const router = new Router();

router.get("/", async ctx => {
    ctx.redirect('back', '/index.html')
})

router.post("/login", async ctx => {
    let login = (ctx.request.body.login || '').trim();
    let password = (ctx.request.body.password || '').trim();

    console.log(login + ' ' + password);

    ctx.body = ctx.request.body;
})

router.post("/user/avatar", async ctx => {
    const file = ctx.request.body.files;

    console.log(JSON.stringify(ctx.request.body.fields));
    console.log(JSON.stringify());

    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}` + "\n" +  JSON.stringify(ctx.request.body.files);
})

router.get("/ping", async ctx => {
    ctx.body = {
        data: "Sending some JSON v2"
    };
})

router.get("/error_401", async ctx => {
    ctx.body = {
        data: "Sending some JSON v2"
    };
})

router.get("/error_500", async ctx => {
    ctx.throw(500, 'name required');
})

router.get("/admin", async ctx => {
    ctx.throw(401, 'access_denied');
})

module.exports = router;

