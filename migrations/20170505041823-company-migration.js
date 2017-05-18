'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('companies', [
            {
                name: '纯银时代',
                address: '广州市番禺区钟村105国道钟村装饰城二楼C1-236',
                tbUrl: 'https://shop71936180.taobao.com',
                phone: '020-84519779',
                email: '84677236@qq.com',
                copyright: 'copyright',
                introduction: '2006年9月，公司于广州市番禺区名店城开设了第一家银蒂尼纯银时代 银饰专营店，正式开启了我们纯银时代银饰连锁事业的发展。纯银时代主要 以经营国标925、足银饰品为主，公司以“快时尚”理念经营银饰产品，打破 行业的固有惯性思维，我们一直秉承“紧随潮流的丰富产品、服务大众的实惠 价格、贴心优质的体验服务、完善的售后服务体系”为理念，通过多年的 发展，公司目前直营店铺近60家，遍布广东、广西及江浙泸区域。',
                power: '',
                culture: `品牌愿景——成为银饰行业的首选品牌! 
                商品定位——真、快、好、省! 
                我们的使命——为人们更时尚、美丽、自信而努力奋斗！ 
                我们的价值观——诚信、尊重、创新、共赢！ 
                我们的服务理念是——我们能为客户做些什么，直到满意！ 
                我们还能为客户做些什么，直到感动！客户的需求是我们全力以赴的事业！ 
                我们的宗旨是——顾客是我们是上帝，为广大消费者提供最优质的服务！ 
                企业经营理念——与潮流同步、与顾客共赢!`,
                staff: '',
                sortIntroduction: '顾客是我们是上帝，为广大消费者提供最优质的服务!',
                companyMainSrc: '/images/pic01.jpg',
                companySrc: '/images/pic11.jpg',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('companies');
    }
};
