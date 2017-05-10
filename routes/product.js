/**
 * Created by llan on 2017/5/4.
 */
import Product from '../models/product';
const router = require('koa-router')();
import {getBaseInfo} from '../routes/common';
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await Product.findById(id, {
            raw: true
        });
        let baseInfo = await getBaseInfo();
        let context = {
            ...result,
            ...baseInfo
        };
        return ctx.render('product', context);
    } catch (err) {
        console.log('ERROR with product render', err);
    }
});
module.exports = router;
