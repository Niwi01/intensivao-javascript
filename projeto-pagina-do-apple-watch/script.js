const imagemVisualizacao=document.getElementById('imagem-visualizacao')
const tituloProduto=document.getElementById('titulo-produto')
const nomeCor=document.getElementById('nome-cor-selecionada')
const imagemminiatura0=document.getElementById('0-imagem-miniatura')
const imagemminiatura1=document.getElementById('1-imagem-miniatura')
const imagemminiatura2=document.getElementById('2-imagem-miniatura')

const verdeCipeste={
    nome:'Verde-cipreste',
    pasta:'imagens-verde-cipreste'
};
const azulInverno={
    nome:'Azul-inverno',
    pasta:'imagens-azul-inverno'
};
const estelar={
    nome:'Estelar',
    pasta:'imagens-estelar'
};
const meiaNoite={
    nome:'Meia-noite',
    pasta:'imagens-meia-noite'
};
const rosaClaro={
    nome:'Rosa-claro',
    pasta:'imagens-rosa-claro'
};

//const minhaLista=[6,7,4,8,10] //é uma lista, usando []

const opcoesCores=[verdeCipeste,azulInverno,meiaNoite,estelar,rosaClaro];
const opcoesTamanho=['41 mm','45 mm'];

let imagemSelecionada=1;
let tamanhoSelecionado=1;
let corSelecionada=1;

function trocaImagem(){
    const idOpcaoSelecionada=document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);    
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+imagemSelecionada+'.jpeg'
}

function trocaTamanho(){
    //mudar o tamanho da imagem e o titulo, att variavel de controle da caixa
    const idOpcaoSelecionada=document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado=idOpcaoSelecionada.charAt(0);

    tituloProduto.innerText="Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
    
    if(opcoesTamanho[tamanhoSelecionado]==='41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocaCor(){
    //atualizar cor, trocar titulo, nome, imagens das miniaturas e da visualização
    const idOpcaoSelecionada=document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada=idOpcaoSelecionada.charAt(0);

    tituloProduto.innerText="Pulseira loop esportiva "+opcoesCores[corSelecionada].nome+" para caixa de "+ opcoesTamanho[tamanhoSelecionado];

    nomeCor.innerText='Cor - '+opcoesCores[corSelecionada].nome;

    imagemminiatura0.src='./imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-0.jpeg';
    imagemminiatura1.src='./imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-1.jpeg';
    imagemminiatura2.src='./imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-2.jpeg';

    imagemVisualizacao.src='./imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-'+imagemSelecionada+'.jpeg';
}