/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
import {getCompany, getSidebar, getCategory} from './common';
router.get('/', async(ctx)=> {
    let company = await getCompany(),
        sidebar = await getSidebar(),
        category = await getCategory(),
        context = {
            ...company,
            ...sidebar,
            ...category
        };
    console.log('context',context);
    return ctx.render('body', context);
});
module.exports = router;
