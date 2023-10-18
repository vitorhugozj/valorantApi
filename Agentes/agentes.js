'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/agents'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    const galeria = document.getElementById('personagens');
    const tagImg = document.createElement('img');
    tagImg.src = imagem.displayIcon;
    tagImg.addEventListener('click', function() {
        // Função a ser executada quando a imagem é clicada
        console.log('Imagem com ID ' + imagem.uuid + ' foi clicada.');
        const galeria_info = document.getElementById('personagem_imagem');
        const nome_info = document.getElementById('personagem_nome')
        const desc_info = document.getElementById('personagem_descricao')
        const classe_info = document.getElementById('personagem_classe')
        const hab1 = document.getElementById('personagem_hab1')
        const hab1_info = document.getElementById('hab1_descricao')
        const hab2 = document.getElementById('personagem_hab2')
        const hab2_info = document.getElementById('hab2_descricao')
        const ult = document.getElementById('personagem_ult')
        const ult_info = document.getElementById('ult_descricao')


        const imgSelecionada = document.createElement('img');
        const nomeSelecionado = document.createElement('h1')
        const descSelecionado = document.createElement('p')
        const classeSelecionado = document.createElement('p')
        const hab1Selecinado = document.createElement('p')
        const hab1_infoSelecionado = document.createElement('p')
        const hab2Selecinado = document.createElement('p')
        const hab2_infoSelecionado = document.createElement('p')
        const ultSelecinado = document.createElement('p')
        const ult_infoSelecionado = document.createElement('p')

        nomeSelecionado.textContent = imagem.displayName
        imgSelecionada.src = imagem.fullPortrait;
        descSelecionado.textContent = imagem.desc
        classeSelecionado.textContent = imagem.role.displayName
        hab1Selecinado.textContent = imagem.abilities[0].displayName
        hab1_infoSelecionado.textContent = imagem.abilities[0].description
        hab2Selecinado.textContent = imagem.abilities[1].displayName
        hab2_infoSelecionado.textContent = imagem.abilities[1].description
        ultSelecinado.textContent = imagem.abilities[3].displayName
        ult_infoSelecionado.textContent = imagem.abilities[3].description

        nome_info.innerHTML = '';
        galeria_info.innerHTML = ''; // Limpa o conteúdo anterior
        desc_info.innerHTML = ''
        classe_info.innerHTML = ''
        hab1.innerHTML = ''
        hab1_info.innerHTML = ''
        hab2.innerHTML = ''
        hab2_info.innerHTML = ''
        ult.innerHTML = ''
        ult_info.innerHTML = ''

        nome_info.appendChild(nomeSelecionado)
        galeria_info.appendChild(imgSelecionada);
        desc_info.appendChild(descSelecionado)
        classe_info.appendChild(classeSelecionado)
        hab1.appendChild(hab1Selecinado)
        hab1_info.appendChild(hab1_infoSelecionado)
        hab2.appendChild(hab2Selecinado)
        hab2_info.appendChild(hab2_infoSelecionado)
        ult.appendChild(ultSelecinado)
        ult_info.appendChild(ult_infoSelecionado)
        // Você pode adicionar mais ações aqui para selecionar a imagem
    });
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

carregarFotos();
