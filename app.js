const Koa = require('koa');
const path = require('path');
const app = new Koa();
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const views = require('koa-nunjucks-promise');
import sequelize from './sequelize';
import router from './routers';
//middleware
app.use(require('koa-static')(__dirname + '/assets'));
app.use(views(path.join(__dirname, '/views')), {
    ext: 'html',
    noCache: process.env.NODE_ENV === 'development'
});
app.use(bodyParser());
app.use(json());
// let company = {
//     'companyName': '店铺名称',
//     'companySrc': '#',
//     'companyIntroduction': '公司简介',
//     'companyAddress': 'xxx省xxx市xxx区xxx镇xxx号',
//     'companyPhone': '020-xxxxxxxxx',
//     'companyEmail': 'example@example.com'
// };
//
// let sider = {
//     'faddishTitle': '爆款标题',
//     'faddish1': '爆款1名称',
//     'faddish1Introduction': '爆款1简介',
//     'faddish2': '爆款2名称',
//     'faddish2Introduction': '爆款2简介',
//     'faddish3': '爆款3名称',
//     'faddish3Introduction': '爆款3简介',
//     'faddish4': '爆款4名称',
//     'faddish4Introduction': '爆款4简介',
//     'faddish5': '爆款5名称',
//     'faddish5Introduction': '爆款5简介',
//     'faddish6': '爆款6名称',
//     'faddish6Introduction': '爆款6简介',
//     'freshTitle': '上新标题',
//     'fresh1': '新品1名称',
//     'fresh1Introduction': '新品1简介',
//     'fresh2': '新品2名称',
//     'fresh2Introduction': '新品2简介',
//     'fresh3': '新品3名称',
//     'fresh3Introduction': '新品3简介',
//     'fresh4': '新品4名称',
//     'fresh4Introduction': '新品4简介',
//     'mainTitle': '主推标题',
//     'main1': '主推1名称',
//     'main2': '主推2名称',
//     'main3': '主推3名称',
//     'main1Introduction': '主推1简介',
//     'main2Introduction': '主推2简介',
//     'main3Introduction': '主推3简介'
// };
//
// router.get('/', async(ctx)=> {
//     let context = {
//         ...company,
//         ...sider,
//         'imageUrl': '/images/pic10.jpg',
//         'h1Text': '大标题',
//         'subText': '副标题',
//         'introduction': '简介',
//         'productCategory': '产品类目',
//         'category1': '产品1名称',
//         'category1Introduction': '产品1简介',
//         'category2': '产品2名称',
//         'category2Introduction': '产品2简介',
//         'category3': '产品3名称',
//         'category3Introduction': '产品3简介',
//         'category4': '产品4名称',
//         'category4Introduction': '产品4简介'
//     };
//     await ctx.render('body', context);
// });
//
// router.get('/company', async(ctx)=> {
//     let context = {
//         ...sider,
//         ...company
//     };
//     await ctx.render('company', context);
// });
//
// for (let i = 1; i <= 3; i++) {
//     router.get(`/main/${i}`, async(ctx)=> {
//         let context = {
//             ...sider,
//             ...company
//         };
//         await ctx.render(`main/main${i}`, context);
//     });
// }
//
// router.get(`/admin`, async(ctx)=> {
//     await ctx.render('admin/admin');
// });
//
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
