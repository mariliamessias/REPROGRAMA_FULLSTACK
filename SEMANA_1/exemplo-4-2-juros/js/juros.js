const dinheiro = document.querySelectorAll(".juros");

for( let i = 0; i < dinheiro.length; i++)
{
    dinheiroSelecionado = dinheiro[i];

    const infoDinheiro = dinheiroSelecionado.querySelector(".info-dinheiro");
    const infoDinheiroValor = infoDinheiro.textContent;

    const infoTaxa = dinheiroSelecionado.querySelector(".info-taxa");
    const infoTaxaValor = infoTaxa.textContent;

    const infoTempo = dinheiroSelecionado.querySelector(".info-tempo");
    const infoTempoValor = infoTempo.textContent;

    const infoResultado = dinheiroSelecionado.querySelector(".info-resultado");
   
    infoResultado.textContent = calculaJuros(infoTaxaValor, infoDinheiroValor,infoTempoValor );
   
}

function calculaJuros(taxa, valor, tempo)
{
    const calculo = parseFloat(taxa) * parseFloat(valor) * parseFloat(tempo);

   return calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}