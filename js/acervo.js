function exibirform(id){
    let display = document.getElementById(id).style.display;
        if(display == "none"){
            document.getElementById(id).style.display = 'block';
        }
        else{
            document.getElementById(id).style.display = 'none';
        }
}
function editar(id){
    let display = document.getElementById(id).style.display;
        if(display == "none"){
            document.getElementById(id).style.display = 'block';
        }
        else{
            document.getElementById(id).style.display = 'none';
        }
}
function toJson(){

    //pegar os e=values
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let tipo = document.getElementById('tipo').value;
    let qtdExemplares = document.getElementById('qtdExemplares').value;

    //ver se não ta vazio
    if (!titulo || !autor || !tipo || !qtdExemplares) {
        console.log("campos nulos");
        return;
    }

    //tranforma num json
    let jsonSend = `{ 
        "titulo": titulo,
        "autor": autor,
        "tipo": tipo,
        "qtd_exemplares": qtdExemplares
    }`;

    //imprimi no console
    console.log(jsonSend);
    alert(jsonSend);

    //outras ações com o objeto json

    //impede de enviar o formulario
    return false;
}
