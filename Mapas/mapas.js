'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/maps'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    const galeria = document.getElementById('mapas');
    const tagImg = document.createElement('img');
    tagImg.src = imagem.listViewIcon;
    tagImg.id = 'borrao'
    const borraoHeader = document.getElementById('header')
    const borraoMain = document.getElementById('main')
    const mapa_mais = document.getElementById('mapa_mais')
    const botao = document.getElementById('botao')
    const info = document.getElementById('info')

    tagImg.addEventListener('click', function() {
        // Função a ser executada quando a imagem é clicada
        console.log('Imagem com ID ' + imagem.uuid + ' foi clicada.');
        const galeria_info = document.getElementById('mapa_mais');
        const nome = document.getElementById('nome_mapa')

        const imgMaiorSelecionada = document.createElement('img');
        const imgMapaSelecionado = document.createElement('img')
        const nomeSelecionado = document.createElement('h1')

        imgMaiorSelecionada.src = imagem.splash
        imgMapaSelecionado.src = imagem.displayIcon
        nomeSelecionado.textContent = imagem.displayName

        galeria_info.innerHTML = '';
        nome.innerHTML = '' // Limpa o conteúdo anterior
        //imagem_maior.innerHTML = ''
        //imagem_mapa.innerHTML = ''

        nome.appendChild(nomeSelecionado)
        galeria_info.appendChild(imgMaiorSelecionada)
        galeria_info.appendChild(imgMapaSelecionado)


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
