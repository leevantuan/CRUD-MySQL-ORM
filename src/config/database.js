const mysql = require('mysql2/promise');
require('dotenv').config()

//create database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 3308,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD
// });

//create database pool connection
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3308,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    //Pools connection
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
});

module.exports = connection;