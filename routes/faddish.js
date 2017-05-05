/**
 * Created by llan on 2017/5/4.
 */
import Faddish from '../models/faddish';
import Property from '../models/property';
const router = require('koa-router')();
import {getBaseInfo} from '../routes/common';
router.get('/:id', async(ctx)=> {
    try {
        let id = ctx.params.id;
        let result = await Faddish.findById(id, {
            raw: true,
            include: Property
        });
        let baseInfo = await getBaseInfo();
        if (result) {
            let context = {
                ...result,
                ...baseInfo
            };
            return ctx.render('faddish', context);
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
        let {name, isShow, introduction, tbUrl}  = ctx.request.body;
        let result = await Faddish.findOne({
            where: {
                name: name
            },
            raw: true
        });
        if (!result) {
            await Faddish.create({
                name: name,
                isShow: isShow,
                introduction: introduction,
                tbUrl
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
