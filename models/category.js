/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import Faddish from './faddish';
import Main from './main';
import Fresh from './fresh';
const Category = sequelize.define(
    'category',
    {
        'name': {
            'type': Sequelize.STRING(64)
        },
        'introduction': {
            'type': Sequelize.STRING(64)
        },
        'isShow': {
            'type': Sequelize.BOOLEAN
        }
    }
);
//Relation
Category.hasMany(Faddish);
Category.hasMany(Faddish);
Category.hasMany(Fresh);
Faddish.belongsTo(Category);
Fresh.belongsTo(Category);
Main.belongsTo(Category);
export default Category;
