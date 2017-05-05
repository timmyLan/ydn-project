'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('faddishes', [
            {
                name: '爆款1',
                introduction: '爆款1介绍',
                sortIntroduction: '爆款1简介',
                tbUrl: 'www.baidu.com',
                property_id: '1',
                category_id: '1',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '爆款2',
                introduction: '爆款2介绍',
                sortIntroduction: '爆款2简介',
                tbUrl: 'www.baidu.com',
                property_id: '1',
                category_id: '2',
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
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('faddishes');
    }
};
