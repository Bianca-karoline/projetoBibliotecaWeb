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

function fazPost(url, j){
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(j));
    request.onload = function(){
        console.log(this.responseText);
    }
    return request.responseText
}

function salvar(){
    let url = 'http://localhost:3000/usuarios';
    let n = document.getElementById('nome').value;
    let c = document.getElementById('cpf').value;
    let e = document.getElementById('email').value;
    let t = document.getElementById('tel').value;
    let a = document.getElementsByName('atribuicao');
    let at;
    for(let i = 0; i <2;i++){
        if(a[i].checked){
            at = a[i].value;
        }
    }
    let j = {
        "nome": n,
        "cpf": c,
        "telefone": t,
        "email": e,
        "atribuicao": at
        }
    fazPost(url, j);
}


