const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaArtigo(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest();
  respostaDaBusca.open("GET",   
  `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaArtigo()}&page=2&sort=oldest&api-key=9e75e22a82d543a3b6e535f46c390b0d`);
  respostaDaBusca.onload = carregaPostsComGifs; // o que vai acontecer no carregamento da resposta
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send();
}

function carregaPostsComGifs(){
  listaGifs = JSON.parse(this.responseText)["response"]["docs"];
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGifs.map(artigo => `
        <div class="gif">
          <p>${artigo.headline.main}</p>
        </div>
        `).join("")}
      </div>`;
}
  

//<img src="${gif.images.fixed_height.url}"></img>

