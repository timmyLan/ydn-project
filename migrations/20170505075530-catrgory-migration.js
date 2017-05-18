'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('categories', [
            {
                name: '手镯',
                introduction:'一般来说，戴左手可以辟邪招财，戴右手可保健康，大家可以根据自己的生活习惯佩戴.',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: '戒指',
                introduction:'佩戴于小指传达的是一种媚惑性感的讯息，戒指戴在其上将会有意想不到的事发生.',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '项链',
                introduction:'我送你项链，就是我想与你相恋(项链)',
                isShow:true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: '银器',
                introduction:'银首饰的艺术风格与我们民族文化的其它瑰宝一样，同出一脉。',
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
