'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/playercards'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    const galeria = document.getElementById('cartoes');
    const tagImg = document.createElement('img');
    tagImg.src = imagem.displayIcon;
    const borraoHeader = document.getElementById('header')
    const borraoMain = document.getElementById('main')
    const mapa_mais = document.getElementById('banner_mais')
    const botao = document.getElementById('botao')
    const info = document.getElementById('info')

    tagImg.addEventListener('click', function() {
        // Função a ser executada quando a imagem é clicada
        console.log('Imagem com ID ' + imagem.uuid + ' foi clicada.');
        const galeria_hor = document.getElementById('banner_hor');
        const galeria_ver = document.getElementById('banner_ver');
        const nome = document.getElementById('nome_banner')

        const imgHorizontalSelecionada = document.createElement('img');
        const imgVerticalSelecionado = document.createElement('img')
        const nomeSelecionado = document.createElement('h1')

        imgHorizontalSelecionada.src = imagem.wideArt
        imgVerticalSelecionado.src = imagem.largeArt
        nomeSelecionado.textContent = imagem.displayName

        galeria_hor.innerHTML = '';
        galeria_ver.innerHTML = ''
        nome.innerHTML = '' // Limpa o conteúdo anterior

        nome.appendChild(nomeSelecionado)
        galeria_hor.appendChild(imgHorizontalSelecionada)
        galeria_ver.appendChild(imgVerticalSelecionado)


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
