/**
 * Created by llan on 2017/5/4.
 */
const router = require('koa-router')();
import {getSidebar, getCompany} from './common';

router.get('/', async(ctx)=> {
    try {
        let company = await getCompany();
        let sidebar = await getSidebar();
        let context = {
            ...company,
            ...sidebar
        };
        return ctx.render('company', context);
    } catch (err) {
        console.log('ERROR with company render', err);
    }
});

module.exports = router;
