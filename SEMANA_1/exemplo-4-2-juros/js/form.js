var botaoAdd = document.getElementById("adicionar-juros");

botaoAdd.addEventListener('click', function(event){

    event.preventDefault();

    const money = document.getElementById("dinheiro");
    const taxa = document.getElementById("taxa");
    const tempo = document.getElementById("tempo");

    const jurosTr = document.createElement("tr");

    const moneyTd = document.createElement("td");
    const taxaTd = document.createElement("td");
    const tempoTd = document.createElement("td");
    const resultadoTd = document.createElement("td");

    moneyTd.textContent = money.value;
    taxaTd.textContent = taxa.value;
    tempoTd.textContent = tempo.value;
    resultadoTd.textContent = calculaJuros(money.value, taxa.value, tempo.value);

    jurosTr.appendChild(moneyTd);
    jurosTr.appendChild(taxaTd);
    jurosTr.appendChild(tempoTd);
    jurosTr.appendChild(resultadoTd);

    const tabelaJuros = document.getElementById("tabela-juros");

    tabelaJuros.appendChild(jurosTr);
});