/**
 * Created by llan on 2017/5/4.
 */
const Sequelize = require('sequelize');
import config from './config';
let sequelize = new Sequelize(config.dbConfig.db, config.dbConfig.user, config.dbConfig.password, config.dbConfig.sequelizeConfig);
export default sequelize;
