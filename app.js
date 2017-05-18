const Koa = require('koa');
const path = require('path');
const app = new Koa();
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const views = require('koa-nunjucks-promise');
const session = require('koa-session');
import sequelize from './sequelize';
import router from './routes';

//app keys
app.keys = ['mypasswordchangeyourpassword'];
//middleware
app.use(session(app));
app.use(require('koa-static')(__dirname + '/assets'));
app.use(views(path.join(__dirname, '/views')), {
    ext: 'html',
    noCache: process.env.NODE_ENV === 'development'
});
app.use(bodyParser());
app.use(json());
app.use(async(ctx, next) => {
    try {
        await next();
        const status = ctx.status || 404;
        if (status === 404) {
            ctx.throw(404)
        }
    } catch (err) {
        ctx.status = err.status || 500;
        if (ctx.status === 404) {
            await ctx.render('404')
        } else {
            await ctx.render('500')
        }
    }
});
//routes
app.use(router.routes());
//connect mysql
sequelize.sync(
    // {
    //     'force': true
    // }
).then(()=> {
    console.log('success to connect mysql~');
});
app.listen(3000);
console.log('listening on 3000');

