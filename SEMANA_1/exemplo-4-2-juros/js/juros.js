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

mensagem = document.getElementById("msgForm");

function validaNumero(valor, valor1, valor2){
    
    mensagem.textContent = "";
    
   if (isNaN(valor) || isNaN(valor1) || isNaN(valor2)){
    //caso seja número
        mensagem.textContent = "informe apenas números!";
        return false;
    } else return true;  
}

function validaVazio(m, ta,te ){

    money = document.getElementById("dinheiro");
    taxa = document.getElementById("taxa");
    tempo = document.getElementById("tempo");

    if (m == "" && ta == "" & te == "")
    {
        money.style.borderColor = "red";
        taxa.style.borderColor = "red";
        tempo.style.borderColor = "red";
        return false;
    }
    else if (m == "" && ta == "")
    {   
        money.style.borderColor = "red";
        taxa.style.borderColor = "red";
        tempo.style.borderColor = "#ccc";
        return false;
    }
    else if (m == "" && te == "")
    {   
        money.style.borderColor = "red";
        taxa.style.borderColor = "#ccc";
        tempo.style.borderColor = "red";
        return false;
    }
    else if (te == "" && ta == "")
    {
        money.style.borderColor = "#ccc";
        taxa.style.borderColor = "red";
        tempo.style.borderColor = "red";
        return false;
    }
    else if (m == "")
    {
        money.style.borderColor = "red";
        taxa.style.borderColor = "#ccc";
        tempo.style.borderColor = "#ccc";
    }
    else if (te == "")
    {
        money.style.borderColor = "#ccc";
        taxa.style.borderColor = "#ccc";
        tempo.style.borderColor = "red";
    }
    else if (ta == "")
    {
        money.style.borderColor = "#ccc";
        taxa.style.borderColor = "red";
        tempo.style.borderColor = "#ccc"; 
    }
    else
    {
        money.style.borderColor = "#ccc";
        taxa.style.borderColor = "#ccc";
        tempo.style.borderColor = "#ccc";
        return true;
    }
}