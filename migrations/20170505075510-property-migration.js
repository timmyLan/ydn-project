'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('properties', [
            {
                name: '爆款',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '上新',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '主推',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('properties');
    }
};
