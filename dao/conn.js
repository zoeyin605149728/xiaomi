const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10, // 最大连接数
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'h5-2009'
});

module.exports = pool;