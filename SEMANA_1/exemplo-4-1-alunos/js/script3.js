const adicionarAluno = document.getElementById("adicionar-aluno");

adicionarAluno.addEventListener('click', function(event){

    event.preventDefault();
    const formularioAluno = document.querySelector("#form-adiciona");

    //const nomeAluno = formularioAluno.nome.value;
    //const notaUmAluno = formularioAluno.notaum.value;
    //const notaDoisAluno = formularioAluno.notadois.value;
    const aluno = obterDados(formularioAluno);

    const alunoTr = document.createElement("tr");

    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    mediaAlunoTd.textContent = aluno.media;

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