/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import Product from './product';
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
Category.hasMany(Product);
Product.belongsTo(Category);
export default Category;
