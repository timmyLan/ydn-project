/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
import Company from '../models/company';
import {getCompany, getProperty, getProduct, getCategory, editProduct} from './common';
router.get('/', async(ctx)=> {
    return ctx.render('admin/admin');
});
router.get('/company', async(ctx)=> {
    let result = await getCompany();
    return ctx.render('admin/company', result);
});
router.get('/addProduct', async(ctx)=> {
    let company = await getCompany();
    let properties = await getProperty();
    let categories = await getCategory();
    let context = {
        ...company,
        ...properties,
        ...categories
    };
    return ctx.render('admin/addProduct', context);
});

router.get('/editProduct/:type/:id', async(ctx)=> {
    let params = ctx.params,
        type = params.type,
        id = params.id;
    let company = await getCompany();
    let properties = await getProperty();
    let product = await getProduct(type, id);
    let categories = await getCategory();
    let context = {
        ...company,
        ...properties,
        ...product,
        ...categories,
        type: type,
        id: id
    };
    return ctx.render('admin/editProduct', context);
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
router.post('/editProduct/:type/:id', async(ctx)=> {
    try {
        let params = ctx.params,
            type = params.type,
            id = params.id,
            body = ctx.request.body;
        if (!body.isShow) {
            body = {
                ...body,
                isShow: "0"
            }
        }else if(body.isShow === 'on'){
            body = {
                ...body,
                isShow: "1"
            }
        }
        await editProduct(type, id, body);
        return ctx.body = {
            info: '成功修改产品相关信息'
        };
    } catch (err) {
        console.log('Error with admin company', err);
    }
});
module.exports = router;
