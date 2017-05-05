/**
 * Created by llan on 2017/5/4.
 */
const host = 'localhost',
    dialect = 'mysql',
    database = 'jewelry',
    user = 'root',
    password = null;
const config = {
    dbConfig: {
        db: database,
        user: user,
        password: password,
        sequelizeConfig: {
            'dialect': dialect,  // 数据库使用mysql
            'host': host, // 数据库服务器ip
            'port': 3306,        // 数据库服务器端口
            'define': {
                'underscored': true
            }
        }
    },
    //sequelize-cli
    development: {
        "username": user,
        "password": password,
        "database": database,
        "host": host,
        "dialect": dialect
    }
};
module.exports = config;
