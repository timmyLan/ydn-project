/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const Body = sequelize.define(
    'body',
    {
        'firstActivitySrc': {
            'type': Sequelize.STRING
        },
        'secondActivitySrc': {
            'type': Sequelize.STRING
        },
        'thirdActivitySrc': {
            'type': Sequelize.STRING
        },
        'firstActivityTbSrc': {
            'type': Sequelize.STRING
        },
        'secondActivityTbSrc': {
            'type': Sequelize.STRING
        },
        'thirdActivityTbSrc': {
            'type': Sequelize.STRING
        }
    }
);
export default Body;
