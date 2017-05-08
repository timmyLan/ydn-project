/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
import {getBaseInfo, getCategory} from './common';
router.get('/', async(ctx)=> {
    let baseInfo = await getBaseInfo(),
        category = await getCategory(),
        context = {
            ...baseInfo,
            ...category
        };
    return ctx.render('body', context);
});
module.exports = router;


