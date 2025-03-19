let amigos = [];
let inputNome = document.getElementById("amigo");
let nomeSorteado = document.getElementById("resultado");

function limparCampo() {
    inputNome.value = "";
}

function elementoDaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; amigos.length > i; i ++ ) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function nomeValido(nome) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nome);
}

function adicionarAmigo() {
    
    if(inputNome.value === "") {
        alert("Por favor, insira um nome.");
    } 
    else if(!nomeValido(inputNome.value)) {
        alert("insira um nome valido!");
    } 
    else if(amigos.includes(inputNome.value)) {
        alert("Nome ja adicionado!");
    } 
    else {
        amigos.push(inputNome.value);
        elementoDaLista();
    }
    
    limparCampo();
}

function sortearAmigo() {
    
    if(amigos.length == 0) {
        alert("impossivel sortear, adicione mais amigos na lista.");
    } 
    else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        nomeSorteado.innerHTML = `O amigo sorteado foi ${amigos[amigoSorteado]}!`; 
    }
}