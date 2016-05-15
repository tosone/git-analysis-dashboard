import path from 'path';

import Koa from 'koa';
import koaStatic from 'koa-static';
import koaConvert from 'koa-convert';

import config from './config';
import routers from './routers';

const app = new Koa();
routers(app);

app.use(koaConvert(koaStatic(path.join(__dirname, 'public'))));

var webpackDevMiddleware = require("koa-webpack-dev-middleware");
var webpack = require("webpack");

var compiler = webpack({
    entry: './src/app.js',
    output: {
        path: 'public'
    }
});
app.use(webpackDevMiddleware(webpack({
    entry: './src/app.js',
    output: {
        path: 'public'
    }
}), {
    // options
}));
app.listen(config.port, () => {
  console.log(`Server running at: ${config.port}.`);
});
