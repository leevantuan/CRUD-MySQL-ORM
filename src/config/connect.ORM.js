const { Sequelize } = require('sequelize');
require('dotenv').config()

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tuanlee', 'root', 'tuan2002', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    //close 1+1
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDB;