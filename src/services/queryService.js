const pool = require("../config/db");

exports.execute = async (query) => {

    const [rows] = await pool.query(query);

    return rows;

};