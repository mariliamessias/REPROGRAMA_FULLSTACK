const adicionarAluno = document.getElementById("adicionar-aluno");

adicionarAluno.addEventListener('click', function(event){

    event.preventDefault();
   

 function obtemAluno()
 {
     return obterDados(document.querySelector("#form-adiciona"));;
 }   
    //const nomeAluno = formularioAluno.nome.value;
    //const notaUmAluno = formularioAluno.notaum.value;
    //const notaDoisAluno = formularioAluno.notadois.value;

function notasValidas(aluno){

    if (!(aluno.notaUmAluno >=0 && aluno.notaUmAluno))
    {
         document.querySelector("#mensagem-erro").innerHTML = "A nota 1 esta errada!";
         return false;
    }
    if (!(aluno.notaDoisAluno >=0 && aluno.notaDoisAluno))
    {
         document.querySelector("#mensagem-erro").innerHTML = "A nota 2 esta errada!";
         return false;
    }
}

function mnensagemErro(){
    setTimeout(function(){
        document.querySelector("#mensagem-erro").innerHTML = "";
    }, 3000);
}

    const alunoTr = document.createElement("tr");

    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    mediaAlunoTd.textContent = aluno.media;
    
    var mensagem =  document.getElementById("msgNotaUm");

    if (validaVazio(aluno.nomeAluno, aluno.notaUmAluno, aluno.notaDoisAluno)){
        
        if (validaNota(aluno.notaUmAluno, aluno.notaDoisAluno)){
            mensagem.textContent = "";
            alunoTr.appendChild(nomeAlunoTd);
            alunoTr.appendChild(notaUmAlunoTd);
            alunoTr.appendChild(notaDoisAlunoTd);
            alunoTr.appendChild(mediaAlunoTd);
    
            const tabela = document.querySelector("#tabela-alunos");
            tabela.appendChild(alunoTr);
            
            if( aluno.media < 5){
                alunoTr.style.backgroundColor = "#ff9999";
            }else{
                alunoTr.style.backgroundColor = "#99ff99";
            }

            limpaCampos();
        }else{
          
          mensagem.textContent = "informe uma nota válida!";
        }
    }else  mensagem.textContent = "Campos em vermelho são obrigatórios!";
    

});

function obterDados(formulario){

    const objetoAluno={
        nomeAluno:formulario.nome.value
        ,notaUmAluno:formulario.notaum.value
        ,notaDoisAluno:formulario.notadois.value
        ,media:calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}