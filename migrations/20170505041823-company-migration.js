'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('companies', [
            {
                name: '银xxx',
                address: 'xxx省xxx市xxx区xxx号',
                tbUrl: 'www.taobao.com',
                phone: '020-xxxxxxxx',
                email: 'xxx@email.com',
                copyright: 'copyright',
                introduction: '公司介绍',
                power: '公司实力展示',
                culture: '公司文化',
                staff: '公司员工氛围',
                sortIntroduction: '公司简介',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('companies');
    }
};
