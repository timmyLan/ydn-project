/**
 * Created by llan on 2017/5/4.
 */

import {getBelongCategory, getBaseInfo} from './common';
import Category from '../models/category';
const router = require('koa-router')();
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let category = await Category.findById(id, {
            raw: true
        });
        let result = await getBelongCategory(id);
        let baseInfo = await getBaseInfo();
        let context = {
            ...baseInfo,
            belongCategories:result,
            category:category
        };

        console.log('context',context);
        return ctx.render('category', context);
    } catch (err) {
        console.log('ERROR with category render', err);
    }
});
module.exports = router;
