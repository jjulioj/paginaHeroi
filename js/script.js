const grupoGrama = ['Spider-Man', 'Black Widow'];
const grupoFogo = ['Iron Man', 'Human Torch'];

function carregarHerois() {
    const requisicaoHttp = new XMLHttpRequest();
    requisicaoHttp.open("GET", "https://akabab.github.io/superhero-api/api/all.json", false);
    requisicaoHttp.send();

    const resposta = JSON.parse(requisicaoHttp.responseText);

    for (let index = 0; index < resposta.length; index++) {
        const heroi = resposta[index];
        heroi.imagem = heroi.images.sm; 
        adicionarCardHeroi(heroi, grupoGrama, grupoFogo);
    }
}

function adicionarCardHeroi(heroi, grupoGrama, grupoFogo) {
    const cardElemento = document.createElement("div");
    cardElemento.className = 'card';

    const imagemElemento = document.createElement("img");
    imagemElemento.setAttribute("src", heroi.imagem);

    const textoElemento = document.createElement("h1");
    textoElemento.innerHTML = heroi.name;

    if (grupoGrama.includes(heroi.name)) {
        cardElemento.classList.add("grama");
    } else if (grupoFogo.includes(heroi.name)) {
        cardElemento.classList.add("fogo");
    }

    cardElemento.appendChild(imagemElemento);
    cardElemento.appendChild(textoElemento);
    const divElemento = document.getElementById("conteudo-pokemon");
    divElemento.appendChild(cardElemento);
}
