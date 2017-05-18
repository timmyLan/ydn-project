/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
const User = sequelize.define(
    'user',
    {
        'name': {
            'type': Sequelize.STRING
        },
        'password': {
            'type': Sequelize.STRING
        }
    }
);
export default User;
