const con = require('../config/connectin');

module.exports.add = function(j, res){
    let sql = 'insert into usuario (nome, cpf, telefone, email, atribuicao, status_emprestimo) values (?,?,?,?,?,1);'
    con.query(sql, j, (err, res) => {
        if (err) {
            console.log(err);
        }else{
            console.log(res);
        }}
        )
}
module.exports.get = function(req, res){
    let sql = 'select * from usuario';
    con.query(sql, (err, res) => {
        if (err) {
            console.log(err);
        }else{
            console.log(res);
        }
    });
}
module.exports.id = function(req, res){
    let sql = 'select * from usuario where cpf = ' + '"8765432"';
    
    con.query(sql, (err, res) => {
        if (err) {
            console.log(err);
        }else{
            console.log(res);
        }
    });
}