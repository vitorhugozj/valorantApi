'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/bundles'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    if(imagem.verticalPromoImage){
        const galeria = document.getElementById('pacotes_imagem');
        const tagImg = document.createElement('img');
        tagImg.src = imagem.verticalPromoImage;
        const borraoHeader = document.getElementById('header')
        const borraoMain = document.getElementById('main')
        const botao = document.getElementById('botao')
        const info = document.getElementById('info')

        tagImg.addEventListener('click', function() {
            // Função a ser executada quando a imagem é clicada
            console.log('Imagem com ID ' + imagem.uuid + ' foi clicada.');
            const galeria = document.getElementById('pacote');
            const nome = document.getElementById('nome_pacote')
            const desc = document.getElementById('desc')
            const botao = document.getElementById('botao')
    
            const pacoteSelecionado = document.createElement('img');
            const nomeSelecionado = document.createElement('h2')
            const descSelecionado = document.createElement('p')

            pacoteSelecionado.src = imagem.displayIcon
            nomeSelecionado.textContent = imagem.displayName
            descSelecionado.textContent = imagem.extraDescription
    
            galeria.innerHTML = '';
            desc.innerHTML = ''
            nome.innerHTML = '' // Limpa o conteúdo anterior
    
            galeria.appendChild(pacoteSelecionado)
            nome.appendChild(nomeSelecionado)
            desc.appendChild(descSelecionado)
    
    
            // Você pode adicionar mais ações aqui para selecionar a imagem
    
        });
        tagImg.addEventListener('click', borrar)
    
        botao.addEventListener('click', sumir)
    
        function sumir() {
            info.classList.remove('mostrar')
            borraoHeader.classList.remove('borrar')
            borraoMain.classList.remove('borrar')
        }
    
        function borrar() {
            info.classList.add('mostrar')
            borraoHeader.classList.add('borrar')
            borraoMain.classList.add('borrar')
        }
        galeria.appendChild(tagImg);
    }

    
}

async function carregarFotos() {
    const imagens = await pegarImagens();
    if (imagens !== undefined) {
        imagens.forEach(criarTagImg);
    } else {
        console.log('ERRRRROOOOO');
    }
}

const borrar = document.getElementById('borrao')

function borrao(){
    bo
}

carregarFotos();
