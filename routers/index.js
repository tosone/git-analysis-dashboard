import Router from 'koa-router';
const router = Router();

export default (app) => {
  [
    require('./users')
  ].forEach((route)=>{
    route(router);
  });

  app.use(router.allowedMethods());
  app.use(router.routes());
};
