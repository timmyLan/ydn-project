/**
 * Created by llan on 2017/5/4.
 */
const router = require('koa-router')();
import {getBaseInfo} from './common';

router.get('/', async(ctx)=> {
    try {
        let context = await getBaseInfo();
        return ctx.render('company', context);
    } catch (err) {
        console.log('ERROR with company render', err);
    }
});

router.get('/more', async(ctx)=> {
    try {
        let context = await getBaseInfo();
        return ctx.render('moreCompany', context);
    } catch (err) {
        console.log('ERROR with moreCompany render', err);
    }
});
module.exports = router;
