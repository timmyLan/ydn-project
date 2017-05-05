/**
 * Created by llan on 2017/5/4.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const Company = sequelize.define(
    'company',
    {
        'name': {
            'type': Sequelize.STRING(64)
        },
        'address': {
            'type': Sequelize.STRING(64)
        },
        'tbUrl': {
            'type': Sequelize.STRING(64)
        },
        'phone': {
            'type': Sequelize.STRING(64)
        },
        'email': {
            'type': Sequelize.STRING(64)
        },
        'copyright':{
            'type': Sequelize.STRING(64)
        },
        'sortIntroduction':{
            'type': Sequelize.STRING(64)
        },
        'introduction':{
            'type': Sequelize.STRING(64)
        },
        'power':{
            'type': Sequelize.STRING(64)
        },
        'culture':{
            'type': Sequelize.STRING(64)
        },
        'staff':{
            'type': Sequelize.STRING(64)
        }
    }
);
export default Company;
