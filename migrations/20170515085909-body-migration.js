'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('bodies', [
            {
                faddishName: '爆款标题',
                freshName: '上新标题',
                mainName: '主推标题',
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
