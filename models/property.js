/**
 * Created by llan on 2017/5/5.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import Faddish from './faddish';
import Main from './main';
import Fresh from './fresh';
const Property = sequelize.define(
    'property',
    {
        'name': {
            'type': Sequelize.STRING(64)
        }
    }
);
//Relation
Property.hasMany(Faddish);
Property.hasMany(Faddish);
Property.hasMany(Fresh);
Faddish.belongsTo(Property);
Fresh.belongsTo(Property);
Main.belongsTo(Property);
export default Property;
