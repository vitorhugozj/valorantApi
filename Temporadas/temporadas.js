'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/seasons'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    const galeria = document.getElementById('textos');
    const tagH2 = document.createElement('h2');
    tagH2.textContent = imagem.displayName;

    galeria.appendChild(tagH2);

    tagH2.addEventListener('mouseover', function(){

        const infoDiv = document.createElement('div')
        const inicioInfo = document.createElement('p')
        const fimInfo = document.createElement('p')

        inicioInfo.textContent = 'Início: ' + imagem.startTime
        fimInfo.textContent = 'Fim: ' + imagem.endTime

        infoDiv.appendChild(inicioInfo)
        infoDiv.appendChild(fimInfo)

        tagH2.appendChild(infoDiv)

        console.log(inicioInfo)
    });

    tagH2.addEventListener('mouseout', function(){

        const infoDiv = tagH2.querySelector('div')
        if (infoDiv) {
            tagH2.removeChild(infoDiv)
        }

        console.log('SAINDOOOOO')
    })
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
