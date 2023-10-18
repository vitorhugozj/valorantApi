'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/gamemodes'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    if (imagem.displayIcon) {
        const galeria = document.getElementById('imagem');
        const tagImg = document.createElement('img');
        tagImg.src = imagem.displayIcon;

        tagImg.addEventListener('mouseover', function(){

            const infoDiv = document.createElement('div')
            const nome = document.createElement('h2')
            const duracao = document.createElement('h3')

            nome.textContent = imagem.displayName
            duracao.textContent = 'duração ' + imagem.duration

            infoDiv.appendChild(nome)
            infoDiv.appendChild(duracao)
            tagImg.appendChild(infoDiv)

            console.log(nome)
        });

        tagImg.addEventListener('mouseout', function(){

            const infoDiv = tagImg.querySelector('imagem_info')
            if(infoDiv) {
                tagImg.removeChild(infoDiv)
            }

            console.log('saindooo')
        })

        galeria.appendChild(tagImg);
    }
}



async function carregarFotos() {
    const imagens = await pegarImagens();
    if (imagens !== undefined) {
        imagens.forEach(criarTagImg);
        //imagens.forEach(criarTagInfo)
    } else {
        console.log('ERRRRROOOOO');
    }
}

carregarFotos();
