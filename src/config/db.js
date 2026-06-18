const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.CDR_MYSQL_DB_HOST,
    port: process.env.CDR_MYSQL_DB_PORT,
    user: process.env.CDR_MYSQL_DB_USERNAME,
    password: process.env.CDR_MYSQL_DB_PASSWORD,
    database: process.env.CDR_MYSQL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;