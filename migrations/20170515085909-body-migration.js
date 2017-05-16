'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('bodies', [
            {
                firstActivitySrc: '/images/pic01.jpg',
                secondActivitySrc: '/images/pic02.jpg',
                thirdActivitySrc: '/images/pic03.jpg',
                firstActivityTbSrc: 'https://www.taobao.com',
                secondActivityTbSrc: 'https://www.taobao.com',
                thirdActivityTbSrc: 'https://www.taobao.com',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('bodies');
    }
};
