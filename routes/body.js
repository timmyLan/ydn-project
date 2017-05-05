/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
import {getCompany, getSidebar} from './common';
import Category from '../models/category';
router.get('/', async(ctx)=> {
    let company = await getCompany(),
        sidebar = await getSidebar(),
        context = {
            ...company,
            ...sidebar
        };
    return ctx.render('body', context);
});
module.exports = router;
