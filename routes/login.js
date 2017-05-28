/**
 * Created by llan on 2017/5/12.
 */

const router = require('koa-router')();
import {changePassword} from './common';
import User from '../models/user';
router.get('/', async(ctx)=> {
    return ctx.render('login');
});
router.post('/', async(ctx)=> {
    let body = ctx.request.body;
    if (!body.name) {
        return ctx.render('login', {
            status: 400,
            context: '用户名必须填写',
            layout:'login'
        });
    }
    if (!body.password) {
        return ctx.render('login', {
            status: 400,
            context: '密码必须填写',
            layout:'login'
        });
    }

    let password = changePassword(body.password);
    let result = await User.findOne({
        where: {
            name: body.name,
            password: password
        },
        raw: true
    });
    if (!result) {
        return ctx.render('login', {
            status: 400,
            context: '登录失败,用户名或密码错误',
            layout:'login'
        })
    } else {
        ctx.session.login = 'passLogin';
        return ctx.redirect('/cysd');
    }
});
module.exports = router;
