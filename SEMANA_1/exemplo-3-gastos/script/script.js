const button = document.querySelector(".transacao__button");

button.addEventListener("click", function(event){

    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");

    const inputName = document.getElementById('transacaoInputName');
    const inputDate = document.getElementById('transacaoInputDate');
    const inputMoney = document.getElementById('transacaoInputMoney');
    const mensagemMoney = document.getElementById('msgMoney');
    const mensagemNome = document.getElementById('msgNome');
    const mensagemData = document.getElementById('msgData');

    const linha = document.createElement("tr");
    
    if (!inputName.value){
        mensagemNome.textContent="Informe um nome!";
        inputName.style.background = "#ff9999";
        inputMoney.style.background = "#ffffff";
        inputDate.style.background = "#ffffff";
        mensagemMoney.textContent = "";  
            mensagemData.textContent = "";
           
    }
    else if(!inputDate.value){
        mensagemData.textContent="Informe uma data!";
        inputDate.style.background = "#ff9999";
        inputMoney.style.background = "#ffffff";
        inputName.style.background = "#ffffff";
        mensagemMoney.textContent = "";  
        
            mensagemMoney.textContent = ""; 


    } else if(!inputMoney.value){
        inputMoney.style.background = "#ff9999";
        inputDate.style.background = "#ffffff";
        inputName.style.background = "#ffffff";
        mensagemMoney.textContent = "";  
            mensagemData.textContent = "";
            
        mensagemMoney.textContent = "Informe um valor válido!";      
    }
     else{   
         if (!isNaN(inputMoney.value)) {

            inputMoney.style.background = "#ffffff";
            inputDate.style.background = "#ffffff";
            inputName.style.background = "#ffffff";
            mensagemMoney.textContent = "";  
            mensagemData.textContent = "";
            mensagemNome.textContent = "";  
   
               
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
    
        }
    }
    
    
    
    });