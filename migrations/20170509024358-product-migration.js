'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('products', [
            {
                name: '爆款1',
                introduction: '爆款1介绍',
                isShow: true,
                tbUrl: 'www.baidu.com',
                sortIntroduction: '爆款1简介',
                property_id: '1',
                category_id: '1',
                imgSrc:'/images/pic01.jpg',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '爆款2',
                introduction: '爆款2介绍',
                sortIntroduction: '爆款2简介',
                tbUrl: 'www.baidu.com',
                property_id: '1',
                category_id: '2',
                imgSrc:'/images/pic02.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '爆款3',
                introduction: '爆款3介绍',
                sortIntroduction: '爆款3简介',
                tbUrl: 'www.baidu.com',
                property_id: '1',
                category_id: '1',
                imgSrc:'/images/pic03.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '爆款4',
                introduction: '爆款4介绍',
                sortIntroduction: '爆款4简介',
                tbUrl: 'www.baidu.com',
                property_id: '1',
                category_id: '4',
                imgSrc:'/images/pic04.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '上新1',
                introduction: '上新1介绍',
                sortIntroduction: '上新1简介',
                tbUrl: 'www.baidu.com',
                property_id: '2',
                category_id: '1',
                imgSrc:'/images/pic05.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '上新2',
                introduction: '上新2介绍',
                sortIntroduction: '上新2简介',
                tbUrl: 'www.baidu.com',
                property_id: '2',
                category_id: '2',
                imgSrc:'/images/pic06.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '上新3',
                introduction: '上新3介绍',
                sortIntroduction: '上新3简介',
                tbUrl: 'www.baidu.com',
                property_id: '2',
                category_id: '1',
                imgSrc:'/images/pic07.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '上新4',
                introduction: '上新4介绍',
                sortIntroduction: '上新4简介',
                tbUrl: 'www.baidu.com',
                property_id: '2',
                category_id: '4',
                imgSrc:'/images/pic08.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '主推1',
                introduction: '主推1介绍',
                sortIntroduction: '主推1简介',
                tbUrl: 'www.baidu.com',
                category_id: '1',
                property_id: '3',
                imgSrc:'/images/pic09.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '主推2',
                introduction: '主推2介绍',
                sortIntroduction: '主推2简介',
                tbUrl: 'www.baidu.com',
                category_id: '2',
                property_id: '3',
                imgSrc:'/images/pic01.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '主推3',
                introduction: '主推3介绍',
                sortIntroduction: '主推3简介',
                tbUrl: 'www.baidu.com',
                category_id: '1',
                property_id: '3',
                imgSrc:'/images/pic02.jpg',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '主推4',
                introduction: '主推4介绍',
                sortIntroduction: '主推4简介',
                tbUrl: 'www.baidu.com',
                category_id: '4',
                property_id: '3',
                imgSrc:'/images/pic03.jpg',
                isShow: false,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('products');
    }
};
