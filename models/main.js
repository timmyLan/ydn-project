/**
 * Created by llan on 2017/5/4.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const Main = sequelize.define(
    'main',
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
        'sortIntroduction': {
            'type': Sequelize.STRING(64)
        },
        'tbUrl': {
            'type': Sequelize.STRING(64)
        }
    }
);
export default Main;
