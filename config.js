/**
 * Created by llan on 2017/5/4.
 */
const config = {
    dbConfig:{
        db:'jewelry',
        user:'root',
        password:'',
        sequelizeConfig:{
            'dialect': 'mysql',  // 数据库使用mysql
            'host': 'localhost', // 数据库服务器ip
            'port': 3306,        // 数据库服务器端口
            'define': {
                'underscored': true
            }
        }
    }
};
export default config;
