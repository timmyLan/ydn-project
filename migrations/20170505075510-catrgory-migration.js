'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('categories', [
            {
                name: '手镯',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '戒指',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '项链',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '银器',
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('categories');
    }
};
