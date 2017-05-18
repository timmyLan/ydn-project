/**
 * Created by llan on 2017/5/4.
 */
import Sequelize from 'sequelize';
import sequelize from '../sequelize';

const Product = sequelize.define(
    'product',
    {
        'name': {
            'type': Sequelize.STRING
        },
        'introduction': {
            'type': Sequelize.STRING(1234)
        },
        'isShow': {
            'type': Sequelize.BOOLEAN
        },
        'tbUrl': {
            'type': Sequelize.STRING
        },
        'sortIntroduction': {
            'type': Sequelize.STRING(1234)
        },
        'imgMainSrc': {
            'type': Sequelize.STRING
        },
        'imgFirstSrc': {
            'type': Sequelize.STRING
        },
        'imgSecondSrc': {
            'type': Sequelize.STRING
        },
        'imgThirdSrc': {
            'type': Sequelize.STRING
        },
        'imgFourthSrc': {
            'type': Sequelize.STRING
        },
        'imgFirstIntroduction': {
            'type': Sequelize.STRING(1234)
        },
        'imgSecondIntroduction': {
            'type': Sequelize.STRING(1234)
        },
        'imgThirdIntroduction': {
            'type': Sequelize.STRING(1234)
        },
        'imgFourthIntroduction': {
            'type': Sequelize.STRING(1234)
        }
    }
);
export default Product;
