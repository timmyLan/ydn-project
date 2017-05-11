/**
 * Created by llan on 2017/5/5.
 */

const router = require('koa-router')();
import path from 'path';
import fs from 'fs';
import multer from 'koa-multer';
const upload = multer({dest:path.join(__dirname, '../assets/images')});
import Company from '../models/company';
import {
    getCompany, getProperty, getProduct,
    getCategory, editProduct, getAllProduct,
    getProductByOption, countPerPage
} from './common';
router.get('/', async(ctx)=> {
    return ctx.render('admin/admin');
});
router.post('/company', async(ctx)=> {
    try {
        await Company.update(ctx.req.body, {
            where: {
                id: 1
            }
        });
        return ctx.body = {
            status: 200,
            info: '成功修改公司相关信息'
        }
    } catch (err) {
        console.log('Error with edit company', err);
    }
});

router.get('/company', async(ctx)=> {
    let context = await getCompany();
    return ctx.render('admin/company', context);
});

router.all('/searchProduct/:currentPage', async(ctx)=> {
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
router.post('/editProduct/:id', upload.single('imgFile'), async(ctx)=> {
    try {
        let params = ctx.params,
            id = params.id;
        let body = ctx.req.body;
        if (ctx.req.file) {
            const file = ctx.req.file;
            const originalname = file.originalname;
            const tmp_path = file.path;
            const target_path = path.join(__dirname, '../../assets/images/', originalname);
            const src = fs.createReadStream(tmp_path);
            const dest = fs.createWriteStream(target_path);
            src.pipe(dest);
            src.on('end', ()=> {
                console.log('成功上传图片')
            });
            src.on('error', function () {
                throw 'Error with upload image'
            });
        }
        await editProduct(id, body);
        return ctx.body = {
            status: 200,
            context: '成功修改产品相关信息'
        }
    } catch (err) {
        console.log('Error with editProduct', err);
        return ctx.body = {
            status: 400,
            context: '修改产品相关信息失败'
        }
    }
});
router.get('/editProduct/:id', upload.single('imgFile'), async(ctx)=> {
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
router.post('/isShow', async(ctx)=> {
    let body = ctx.request.body,
        property_id = body.property_id;
    let result = Product.findAndCountAll({
        where: {
            property_id: property_id
        },
        raw: true
    });
    return ctx.body = result.count;
});
module.exports = router;
