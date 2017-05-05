/**
 * Created by llan on 2017/5/4.
 */
import Faddish from '../models/faddish';
const router = require('koa-router')();
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await Faddish.findById(id);
        if (result) {
            return ctx.render('faddish', result.toJSON());
        } else {
            return ctx.body = {
                info: 'id not match'
            }
        }
    } catch (err) {
        console.log('ERROR with faddish render', err);
    }
});

router.post('/create', async(ctx)=> {
    try {
        let {name, isShow, introduction}  = ctx.request.body;
        let result = await Faddish.findOne({
            where: {
                name: name
            }
        });
        if (!result) {
            await Faddish.create({
                name: name,
                isShow: isShow,
                introduction: introduction
            });
            return ctx.body = {
                info: 'success to create faddish'
            };
        } else {
            return ctx.body = {
                errorInfo: 'faddish has been exits'
            }
        }
    } catch (err) {
        console.log('Error with createFaddish', err);
    }
});
module.exports = router;
