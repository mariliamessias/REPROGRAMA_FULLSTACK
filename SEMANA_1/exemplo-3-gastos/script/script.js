const button = document.querySelector(".transacao__button");

button.addEventListener("click", function(event){

    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");

    const inputName = document.getElementById('transacaoInputName');
    const inputDate = document.getElementById('transacaoInputDate');
    const inputMoney = document.getElementById('transacaoInputMoney');
    const mensagemMoney = document.getElementById('msgMoney');

    const linha = document.createElement("tr");
    
    if (inputName.value && inputMoney.value && inputDate.value){

        if (!isNaN(inputMoney.value)) {

            inputMoney.style.background = "#ffffff";
            mensagemMoney.textContent = "";   
    
            const colunaName = document.createElement("td");
            const colunaNomeConteudo = document.createTextNode(inputName.value);
            colunaName.appendChild(colunaNomeConteudo);
    
            const colunaMoney = document.createElement("td");
            const colunaMoneyConteudo = document.createTextNode(inputMoney.value);
            colunaMoney.appendChild(colunaMoneyConteudo);
    
            const colunaDate = document.createElement("td");
            const colunaDateConteudo = document.createTextNode(inputDate.value);
            colunaDate.appendChild(colunaDateConteudo);
    
            linha.appendChild(colunaName);
            linha.appendChild(colunaMoney);
            linha.appendChild(colunaDate);
    
            tabela.appendChild(linha);
    
        }else{
            inputMoney.style.background = "#ff9999";
            mensagemMoney.textContent = "Informe um valor válido!";        
        }
    
    }

    
    });