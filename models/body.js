/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const Body = sequelize.define(
    'body',
    {
        'faddishName': {
            'type': Sequelize.STRING(64)
        },
        'freshName': {
            'type': Sequelize.STRING(64)
        },
        'mainName': {
            'type': Sequelize.STRING(64)
        },
        'firstActivitySrc': {
            'type': Sequelize.STRING(64)
        },
        'secondActivitySrc': {
            'type': Sequelize.STRING(64)
        },
        'thirdActivitySrc': {
            'type': Sequelize.STRING(64)
        },
        'firstActivityTbSrc': {
            'type': Sequelize.STRING(64)
        },
        'secondActivityTbSrc': {
            'type': Sequelize.STRING(64)
        },
        'thirdActivityTbSrc': {
            'type': Sequelize.STRING(64)
        }
    }
);
export default Body;
