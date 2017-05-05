'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('categories', [
            {
                name: '手镯',
                introduction:'分类1介绍',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '戒指',
                introduction:'分类2介绍',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '项链',
                introduction:'分类3介绍',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '银器',
                introduction:'分类4介绍',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('categories');
    }
};
