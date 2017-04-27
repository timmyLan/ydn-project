'use strict';

const Koa = require('koa');
const router = require('koa-router')();
const hbs = require('koa-hbs');
const convert = require('koa-convert');
const co = require('co');
const app = new Koa();
app.use(require('koa-static')(__dirname + '/public'));
app.use(convert(hbs.middleware({
    viewPath: __dirname + '/',
})));

app.use(async(ctx, next) => {
    const render = ctx.render;
    ctx.render = async function _convertedRender() {
        return co.call(ctx, render.apply(ctx, arguments))
    };
    await next();
});

router.get('/', async function (ctx, next) {
    const context = {
        imageUrl:'/images/pic10.jpg',
        h1Text:'Hi, I’m llan'
    };
    await ctx.render('index', context);
});

app.use(router.routes());

app.listen(3000);
console.log('listening on 3000');
