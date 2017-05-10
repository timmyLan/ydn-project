'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('properties', [
            {
                name: '爆款',
                type: 'faddish',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '上新',
                type: 'fresh',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '主推',
                type: 'main',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('properties');
    }
};
