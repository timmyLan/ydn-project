/**
 * Created by llan on 2017/5/4.
 */
import Fresh from '../models/fresh';
const router = require('koa-router')();
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await Fresh.findById(id,{
            raw: true
        });
        if (result) {
            return ctx.render('fresh', result);
        } else {
            return ctx.body = {
                info: 'id not match'
            }
        }
    } catch (err) {
        console.log('ERROR with fresh render', err);
    }
});

router.post('/create', async(ctx)=> {
    try {
        let {name, isShow, introduction,tbUrl}  = ctx.request.body;
        let result = await Fresh.findOne({
            where: {
                name: name
            },
            raw: true
        });
        if (!result) {
            await Fresh.create({
                name: name,
                isShow: isShow,
                introduction: introduction,
                tbUrl:tbUrl
            });
            return ctx.body = {
                info: 'success to create fresh'
            };
        } else {
            return ctx.body = {
                errorInfo: 'fresh has been exits'
            }
        }
    } catch (err) {
        console.log('Error with createFresh file', err);
    }
});
module.exports = router;
