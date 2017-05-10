const Koa = require('koa');
const path = require('path');
const app = new Koa();
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const views = require('koa-nunjucks-promise');
import sequelize from './sequelize';
import router from './routes';
//middleware
app.use(require('koa-static')(__dirname + '/assets'));
app.use(views(path.join(__dirname, '/views')), {
    ext: 'html',
    noCache: process.env.NODE_ENV === 'development'
});
app.use(bodyParser());
app.use(json());
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
