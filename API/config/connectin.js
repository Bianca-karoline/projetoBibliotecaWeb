const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    port:3306,
    database:"biblio"
})

module.exports = conexao