/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
const product = require('./product');
const company = require('./company');
const body = require('./body');
const more = require('./more');
const admin = require('./admin');
const login = require('./login');
router.use('/product', product.routes());
router.use('/company', company.routes());
router.use('/', body.routes());
router.use('/more', more.routes());
router.use('/cysd', admin.routes());
router.use('/login', login.routes());
export default router;
