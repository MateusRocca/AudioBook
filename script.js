//pegando os elementos do html
const botaoPlayPause = document.getElementById('play-pause');
const botaoVoltar = document.getElementById('anterior');
const botaoAvancar = document.getElementById('proximo');
const textoCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');
const numeroCapitulos = 10;


let estaTocando = false; //verifica se a faixa está tocando ou não
let capituloAtual = 1;

function atualizarFaixa() {
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa() //Play automaticamente quando avançar para a próxima faixa
    estaTocando = true;
    trocarNomeFaixa();
}

function tocarFaixa() {
    audioCapitulo.play();
    estaTocando = true;
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    estaTocando = false;
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
    if(estaTocando){
        pausarFaixa();
    } else {
        tocarFaixa()
    }
}

function trocarNomeFaixa() {
    textoCapitulo.innerHTML = `Capítulo ${capituloAtual}`;
}

function proximaFaixa() {
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
   atualizarFaixa();
}

function voltarFaixa() {
    capituloAtual = (capituloAtual === 1) ? numeroCapitulos : capituloAtual - 1;
    atualizarFaixa();
}

//adicionando ouvintes de evento nos botões
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);