 'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('freshes', [
            {
                name: '上新1',
                introduction: '上新1介绍',
                sortIntroduction: '上新1简介',
                tbUrl: 'www.baidu.com',
                category_id: '1',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '上新2',
                introduction: '上新2介绍',
                sortIntroduction: '上新2简介',
                tbUrl: 'www.baidu.com',
                category_id: '2',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '上新3',
                introduction: '上新3介绍',
                sortIntroduction: '上新3简介',
                tbUrl: 'www.baidu.com',
                category_id: '1',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '上新4',
                introduction: '上新4介绍',
                sortIntroduction: '上新4简介',
                tbUrl: 'www.baidu.com',
                category_id: '4',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('freshes');
    }
};
