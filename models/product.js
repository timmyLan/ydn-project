/**
 * Created by llan on 2017/5/4.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';

const Product = sequelize.define(
    'product',
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
        },
        'imgMainSrc': {
            'type': Sequelize.STRING(64)
        },
        'imgFirstSrc': {
            'type': Sequelize.STRING(64)
        },
        'imgSecondSrc': {
            'type': Sequelize.STRING(64)
        },
        'imgThirdSrc': {
            'type': Sequelize.STRING(64)
        },
        'imgFourthSrc': {
            'type': Sequelize.STRING(64)
        },
        'imgFirstIntroduction': {
            'type': Sequelize.STRING(64)
        },
        'imgSecondIntroduction': {
            'type': Sequelize.STRING(64)
        },
        'imgThirdIntroduction': {
            'type': Sequelize.STRING(64)
        },
        'imgFourthIntroduction': {
            'type': Sequelize.STRING(64)
        }
    }
);
export default Product;
