//@method criar conexão
const mysql = require('mysql2');

//config da conn db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'biblioteca_db'
});

module.exports = connection;
