'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [
            {
                name: 'admin',
                password: '5d46ecd8b3be1b2bab602f96841f9840',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('users');
    }
};
