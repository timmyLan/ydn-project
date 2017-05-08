/**
 * Created by llan on 2017/5/4.
 */

import {getMore, getBaseInfo, getMoreCategory} from './common';
import Category from '../models/category';
const router = require('koa-router')();
router.get('/category/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await getMoreCategory(id);
        let baseInfo = await getBaseInfo();
        let category = await Category.findById(id, {
            raw: true
        });
        let context = {
            ...baseInfo,
            getMore: result,
            category: category
        };
        return ctx.render('more', context);
    } catch (err) {
        console.log('Error with get category', err);
    }
});
router.get('/:type', async(ctx)=> {
    try {
        let type = ctx.params.type;
        let result = await getMore(type);
        let baseInfo = await getBaseInfo();
        let context = {
            ...baseInfo,
            getMore: result
        };
        return ctx.render('more', context);
    } catch (err) {
        console.log('Error with more render', err);
    }
});

module.exports = router;
