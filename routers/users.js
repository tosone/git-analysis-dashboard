module.exports = (router) => {
    router.get("/users", async (ctx, next) => {
        ctx.body = "OK";
    });
}
