import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static';
import koaConvert from 'koa-convert';
import config from './config';
const app = new Koa();

app.use(koaConvert(koaStatic(path.join(__dirname, 'public'))));

app.listen(config.port, () => {
  console.log(`Server running at: ${config.port}.`);
});
