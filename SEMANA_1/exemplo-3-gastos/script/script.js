const button = document.querySelector(".transacao__button");
const restaurantes = document.querySelectorAll(".extrato__table");

function validaNome(valor){
    
    for (let i = 0; i < restaurantes.length; i++){
        restaurante = restaurantes[i];
    }
    return true;
  }


button.addEventListener("click", function(event){

    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");

    const inputName = document.getElementById('transacaoInputName');
    const inputDate = document.getElementById('transacaoInputDate');
    const inputMoney = document.getElementById('transacaoInputMoney');
    const mensagemMoney = document.getElementById('msgMoney');
    const mensagemNome = document.getElementById('msgNome');
    const mensagemData = document.getElementById('msgData');
	const dataValida = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    const linha = document.createElement("tr");
    
    if (inputName.value.trim() == ''){
        mensagemNome.textContent="Campo obrigatório!";
        inputName.style.background = "#ff9999";
        inputMoney.style.background = "#ffffff";
        inputDate.style.background = "#ffffff";
        mensagemMoney.textContent = "";  
        mensagemData.textContent = "";
           
    }
    else if(inputDate.value.trim() == '' || (!inputDate.value.match(dataValida))){
        mensagemData.textContent="Informe uma data válida Ex.: DD/MM/AAAA";
        inputDate.style.background = "#ff9999";
        inputMoney.style.background = "#ffffff";
        inputName.style.background = "#ffffff";
        mensagemMoney.textContent = "";  
        mensagemNome.textContent = ""; 
    } 
	else if(inputMoney.value.trim() == '' || (isNaN(inputMoney.value) )){
		
		mensagemMoney.textContent = "Informe um valor válido!"; 
		inputMoney.style.background = "#ff9999";
		inputDate.style.background = "#ffffff";
		inputName.style.background = "#ffffff";
		mensagemNome.textContent = "";  
		mensagemData.textContent = "";
	}		
	
	else{
        
            if (parseFloat(inputMoney.value) <= 0)
            {
                mensagemMoney.textContent = "Precisa ser maior que R$0,00!"; 
                inputMoney.style.background = "#ff9999";
                inputDate.style.background = "#ffffff";
                inputName.style.background = "#ffffff";
                mensagemNome.textContent = "";  
                mensagemData.textContent = "";
            }
            else
            {   
                if (!validaNome(inputName.value)){
                    alert("já existe!");
                }

                else{

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
    
                    inputName.value = "";
                    inputDate.value = "";
                    inputMoney.value = "";
                }
        
			
            }			
		}
		        
    });