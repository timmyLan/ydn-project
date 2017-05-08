/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
const fresh = require('./fresh');
const faddish = require('./faddish');
const main = require('./main');
const company = require('./company');
const body = require('./body');
const more = require('./more');
const admin = require('./admin');
router.use('/fresh', fresh.routes());
router.use('/faddish', faddish.routes());
router.use('/main', main.routes());
router.use('/company', company.routes());
router.use('/', body.routes());
router.use('/more', more.routes());
router.use('/admin', admin.routes());
export default router;
