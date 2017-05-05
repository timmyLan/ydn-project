/**
 * Created by llan on 2017/5/4.
 */
import {getBelongCategory,getBaseInfo} from './common';
const router = require('koa-router')();
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await getBelongCategory(id);
        let baseInfo = await getBaseInfo();
        let context = {
            ...baseInfo,
            ...result
        };
        console.log('context', context);
        return ctx.render('category', context);
    } catch (err) {
        console.log('ERROR with category render', err);
    }
});
module.exports = router;
