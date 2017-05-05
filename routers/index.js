/**
 * Created by llan on 2017/5/5.
 */
const router = require('koa-router')();
const fresh = require('./fresh');
const faddish = require('./faddish');
const main = require('./main');
router.use('/fresh', fresh.routes());
router.use('/faddish', faddish.routes());
router.use('/main', main.routes());
export default router;
