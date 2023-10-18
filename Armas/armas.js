'use strict'

async function pegarImagens(){
    const endPoint ='https://valorant-api.com/v1/weapons'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg(imagem) {
    if(imagem.displayIcon){
        const galeria = document.getElementById('armas_imagem');
        const tagImg = document.createElement('img');
        tagImg.src = imagem.displayIcon;
        const borraoHeader = document.getElementById('header')
        const borraoMain = document.getElementById('main')
        const botao = document.getElementById('botao')
        const info = document.getElementById('info')

        tagImg.addEventListener('click', function() {
            // Função a ser executada quando a imagem é clicada
            console.log('Imagem com ID ' + imagem.uuid + ' foi clicada.');
            const galeria = document.getElementById('arma');
            const nome = document.getElementById('nome_arma')
            const fireR = document.getElementById('firerate')
            const magazine = document.getElementById('magazine')
            const head = document.getElementById('headdamage')
            const body = document.getElementById('bodydamage')

            const pacoteSelecionado = document.createElement('img');
            const nomeSelecionado = document.createElement('h2')
            const fireRselecionado = document.createElement('p')
            const magazineSelecionado = document.createElement('p')
            const headSelecionado = document.createElement('p')
            const bodySelecionado = document.createElement('p')

            pacoteSelecionado.src = imagem.displayIcon
            nomeSelecionado.textContent = imagem.displayName
            fireRselecionado.textContent = "Fire Rate: " + imagem.weaponStats.fireRate
            magazineSelecionado.textContent = "Magazine: " +imagem.weaponStats.magazineSize
            headSelecionado.textContent = "Head Damage: " + imagem.damageRanges[0].headDamage
            bodySelecionado.textContent = "Body Damage: " + imagem.damageRanges[0].bodyDamage
    
            galeria.innerHTML = '';
            fireR.innerHTML = ''
            magazine.innerHTML = ''
            head.innerHTML = ''
            body.innerHTML = ''
            nome.innerHTML = '' // Limpa o conteúdo anterior
    
            galeria.appendChild(pacoteSelecionado)
            nome.appendChild(nomeSelecionado)
            fireR.appendChild(fireRselecionado)
            magazine.appendChild(magazineSelecionado)
            head.appendChild(headSelecionado)
            body.appendChild(bodySelecionado)
    
    
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
