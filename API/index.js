let app = require('../API/config/server');

let rotaUser = require('../API/routes/usuarios');
rotaUser.id(app);



app.listen(3000, function() {
    console.log('Servidor na porta 3000')});