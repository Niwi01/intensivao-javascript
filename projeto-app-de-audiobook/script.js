//const dá ideia de constante, não muda. Let muda com o tempo
const botaoPlayPause=document.getElementById('play-pause');
const botaoAvancar=document.getElementById('proximo')
const botaoVoltar=document.getElementById('anterior')
const nomeCapitulo=document.getElementById('capitulo')
const audioCapitulo=document.getElementById('audio-capitulo');


const numCapitulos=10;
let taTocando=0;
let capituloAtual=1;


function playFaixa(){
    audioCapitulo.play();
    //aqui ocorre a troca da imagem de botão
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}
function pauseFaixa(){
    audioCapitulo.pause();
    //necessario repetir para voltar o "botão pause"
    botaoPlayPause.classList.add('bi-play-circle-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
}
function tocarOuPausar(){
    if(taTocando==0){
        playFaixa();
        taTocando=1
    } 
    else{
        pauseFaixa();
        taTocando=0
    }
}
function trocaNome(){
    nomeCapitulo.innerHTML='Capitulo '+capituloAtual;
}
function proxFaixa(){
    if(capituloAtual==numCapitulos){
        capituloAtual=1
    }else{
        capituloAtual+=1;}

    audioCapitulo.src='./books/dom-casmurro/'+capituloAtual+'.mp3'
    playFaixa();
    taTocando=1;
    trocaNome();
}
function voltarFaixa(){
    if(capituloAtual===1){
        capituloAtual=numCapitulos;
    }else{
        capituloAtual-=1;}

    audioCapitulo.src='./books/dom-casmurro/'+capituloAtual+'.mp3'
    playFaixa();
    taTocando=1;
    trocaNome();
}


botaoPlayPause.addEventListener('click',tocarOuPausar);
botaoAvancar.addEventListener('click',proxFaixa)
botaoVoltar.addEventListener('click',voltarFaixa)
