/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import Product from './product';
const Property = sequelize.define(
    'property',
    {
        'name': {
            'type': Sequelize.STRING
        },
        'type': {
            'type': Sequelize.STRING
        }
    }
);
//Relation
Property.hasMany(Product);
Product.belongsTo(Property);
export default Property;
