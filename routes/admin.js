/**
 * Created by llan on 2017/5/5.
 */

const router = require('koa-router')();
import path from 'path';
import multer from 'koa-multer';
const upload = multer({dest: path.join(__dirname, '../assets/images')});
import Company from '../models/company';

import User from '../models/user';
import {
    getCompany, getProperty, getProduct,
    getCategory, editProduct, getAllProduct,
    getProductByOption, createProduct, fileOperation, changePassword, countPerPage
} from './common';
const checkSession = async(ctx, next)=> {
    if (ctx.session.login != 'passLogin') {
        return ctx.redirect('/login');
    }
    await next;
};

router.get('/', async(ctx, next)=> {
    await checkSession(ctx, next);
    return ctx.render('admin/admin');
});
router.post('/user', async(ctx, next)=> {
    try {
        await checkSession(ctx, next);
        let body = ctx.request.body;
        if (!body['name']) {
            return ctx.body = {
                status: 400,
                context: '用户名必须填写'
            }
        }
        if (!body['password']) {
            return ctx.body = {
                status: 400,
                context: '密码必须填写'
            }
        }
        if (!body['rePassword']) {
            return ctx.body = {
                status: 400,
                context: '重复密码必须填写'
            }
        }
        if (body['password'] !== body['rePassword']) {
            return ctx.body = {
                status: 400,
                context: '输入的两次密码不相同'
            }
        }
        let password = changePassword(body['password']);
        await User.update({
            name: body.name,
            password: password
        }, {
            where: {
                id: 1
            }
        });
        return ctx.body = {
            status: 200,
            context: '修改用户信息成功'
        }
    } catch (err) {
        console.log('Error with editUser', err);
        return ctx.body = {
            status: 400,
            info: '修改用户信息失败'
        }
    }
});

router.post('/company', upload.fields([
    {name: 'companySrc', maxCount: 1},
    {name: 'companyMainSrc', maxCount: 1}
]), async(ctx, next)=> {
    try {
        await checkSession(ctx, next);
        let body = ctx.req.body;
        if (ctx.req.files) {
            let files = ctx.req.files;
            let imgInfo = await fileOperation(files);
            body = {
                ...body,
                ...imgInfo
            }
        }
        await Company.update(body, {
            where: {
                id: 1
            }
        });
        return ctx.body = {
            status: 200,
            context: '修改公司相关信息成功'
        }
    } catch (err) {
        console.log('Error with edit company', err);
        return ctx.body = {
            status: 400,
            context: '修改公司相关信息失败'
        }
    }
});

router.get('/company', async(ctx, next)=> {
    await checkSession(ctx, next);
    let context = await getCompany();
    return ctx.render('admin/company', context);
});

router.all('/searchProduct/:currentPage', async(ctx, next)=> {
    await checkSession(ctx, next);
    let body = ctx.request.body,
        name = body.name,
        property_id = body.property_id,
        category_id = body.category_id,
        currentPage = ctx.params.currentPage;
    if (!currentPage) {
        currentPage = 1
    }
    let products;
    if (!name && !property_id && !category_id) {
        products = await getAllProduct(currentPage);
    } else {
        products = await getProductByOption(name, property_id, category_id, currentPage);
    }
    let company = await getCompany();
    let properties = await getProperty();
    let categories = await getCategory();
    let pageArrs = [];
    for (let i = 1; i <= Math.ceil(products.count / countPerPage); i++) {
        pageArrs.push(parseInt(i));
    }
    let context = {
        ...company,
        ...properties,
        ...categories,
        products: {
            ...products,
            currentPage: parseInt(currentPage),
            pageArrs: pageArrs
        }
    };
    return ctx.render('admin/product', context);
});
router.get('/addProduct', async(ctx, next)=> {
    await checkSession(ctx, next);
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

router.post('/addProduct', upload.fields([
    {name: 'imgMainSrc', maxCount: 1},
    {name: 'imgFirstSrc', maxCount: 1},
    {name: 'imgSecondSrc', maxCount: 1},
    {name: 'imgThirdSrc', maxCount: 1},
    {name: 'imgFourthSrc', maxCount: 1}
]), async(ctx, next)=> {
    try {
        await checkSession(ctx, next);
        let body = ctx.req.body;
        if (ctx.req.files) {
            let files = ctx.req.files;
            let imgInfo = await fileOperation(files);
            body = {
                ...body,
                ...imgInfo
            }
        }
        await createProduct(body);
        return ctx.body = {
            status: 200,
            context: '添加产品成功'
        };
    } catch (err) {
        console.log('Error with addProduct', err);
        return ctx.body = {
            status: 400,
            context: '添加产品失败'
        }
    }
});

router.post('/editProduct/:id', upload.single('imgFile'), async(ctx, next)=> {
    try {
        await checkSession(ctx, next);
        let params = ctx.params,
            id = params.id;
        let body = ctx.req.body;
        if (ctx.req.file) {
            let files = ctx.req.files;
            let imgInfo = await fileOperation(files);
            body = {
                ...body,
                ...imgInfo
            }
        }
        await editProduct(id, body);
        return ctx.body = {
            status: 200,
            context: '修改产品相关信息成功'
        }
    } catch (err) {
        console.log('Error with editProduct', err);
        return ctx.body = {
            status: 400,
            context: '修改产品相关信息失败'
        }
    }
});
router.get('/editProduct/:id', upload.single('imgFile'), async(ctx, next)=> {
    await checkSession(ctx, next);
    let params = ctx.params,
        id = params.id;
    let company = await getCompany();
    let properties = await getProperty();
    let product = await getProduct(id);
    let categories = await getCategory();
    let context = {
        ...company,
        ...properties,
        ...product,
        ...categories
    };
    return ctx.render('admin/editProduct', context);
});
module.exports = router;
