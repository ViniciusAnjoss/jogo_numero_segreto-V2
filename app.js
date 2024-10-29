let listaNumerosSorteados = [];
let numeroLimite = 10;
let numerosecreto = geraNumero();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {
        rate: 1.2,
    });
}

exibirMensagem();

function exibirMensagem() {
    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("P", "Escolha um número entre 1 e 10");
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numerosecreto) {
        exibirTextoTela("h1", "Acertou!");
        let mensagemTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${mensagemTentativa}!`;
        exibirTextoTela("P", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numerosecreto) {
            exibirTextoTela("P", "o número secreto é menor");
        } else {
            exibirTextoTela("P", "o número secreto é maior");
        }
        tentativas++;
        limpar();
    }
}

function limpar() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function jogarNovamente() {
    numerosecreto = geraNumero();
    limpar();
    tentativas = 1;
    exibirMensagem();
    geraNumero();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function geraNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
