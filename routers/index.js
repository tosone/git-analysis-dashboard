import Router from 'koa-router';

module.exports = (app) = {
  var router = Router();
  router.get('/users', async(ctx, next) => {
    ctx.body = "succ";
  });
}
