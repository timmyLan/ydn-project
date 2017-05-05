/**
 * Created by llan on 2017/5/4.
 */
import Main from '../models/main';
const router = require('koa-router')();
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await Main.findById(id, {
            raw: true
        });
        if (result) {
            return ctx.render('main', result);
        } else {
            return ctx.body = {
                info: 'id not match'
            }
        }
    } catch (err) {
        console.log('ERROR with main render', err);
    }
});
router.post('/create', async(ctx)=> {
    try {
        let {name, isShow, introduction, tbUrl, sortIntroduction}  = ctx.request.body;
        let result = await Main.findOne({
            where: {
                name: name
            },
            raw: true
        });
        if (!result) {
            await Main.create({
                name: name,
                isShow: isShow,
                introduction: introduction,
                sortIntroduction: sortIntroduction,
                tbUrl: tbUrl
            });
            return ctx.body = {
                info: 'success to create main'
            };
        } else {
            return ctx.body = {
                errorInfo: 'main has been exits'
            }
        }
    } catch (err) {
        console.log('Error with createMain file', err);
    }
});
module.exports = router;
