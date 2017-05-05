/**
 * Created by llan on 2017/5/4.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const Faddish = sequelize.define(
    'faddish',
    {
        'name': {
            'type': Sequelize.STRING(64)
        },
        'introduction': {
            'type': Sequelize.STRING(64)
        },
        'isShow': {
            'type': Sequelize.BOOLEAN
        },
        'tbUrl': {
            'type': Sequelize.STRING(64)
        },
        'sortIntroduction': {
            'type': Sequelize.STRING(64)
        }
    }
);
export default Faddish;
