/**
 * Created by llan on 2017/5/4.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const Company = sequelize.define(
    'company',
    {
        'name': {
            'type': Sequelize.STRING
        },
        'address': {
            'type': Sequelize.STRING
        },
        'tbUrl': {
            'type': Sequelize.STRING
        },
        'wechatUrl': {
            'type': Sequelize.STRING
        },
        'phone': {
            'type': Sequelize.STRING
        },
        'email': {
            'type': Sequelize.STRING
        },
        'copyright':{
            'type': Sequelize.STRING
        },
        'sortIntroduction':{
            'type': Sequelize.STRING(1234)
        },
        'introduction':{
            'type': Sequelize.STRING(1234)
        },
        'power':{
            'type': Sequelize.STRING(1234)
        },
        'culture':{
            'type': Sequelize.STRING(1234)
        },
        'staff':{
            'type': Sequelize.STRING(1234)
        },
        'companySrc':{
            'type': Sequelize.STRING
        },
        'companyMainSrc':{
            'type': Sequelize.STRING
        }
    }
);
export default Company;
