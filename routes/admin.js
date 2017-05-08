/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
import Company from '../models/company';
import {getCompany} from './common';
router.get('/', async(ctx)=> {
    return ctx.render('admin/admin');
});
router.get('/company', async(ctx)=> {
    let result = await getCompany();
    return ctx.render('admin/company', result);
});
router.post('/company', async(ctx)=> {
    try {
        await Company.update(ctx.request.body, {
            where: {
                id: 1
            }
        });
        return ctx.body = {
            info: '成功修改公司相关信息'
        };
    } catch (err) {
        console.log('Error with admin company', err);
    }
});
module.exports = router;
