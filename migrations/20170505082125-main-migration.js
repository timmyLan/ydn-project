'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('mains', [
            {
                name: '主推1',
                introduction: '主推1介绍',
                sortIntroduction: '主推1简介',
                tbUrl: 'www.baidu.com',
                category_id: '1',
                isShow: true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '主推2',
                introduction: '主推2介绍',
                sortIntroduction: '主推2简介',
                tbUrl: 'www.baidu.com',
                category_id: '2',
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
                isShow: false,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('mains');
    }
};
