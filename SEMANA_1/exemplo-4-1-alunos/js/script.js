const todosAlunos = document.querySelectorAll(".aluno"); // pega todos os elementos da classe aluno

for (let i = 0; i < todosAlunos.length; i++)
{
    const aluno = todosAlunos[i];
    const tdAlunoNotaUm = aluno.querySelector(".info-notaum");
    const primeiraNota = tdAlunoNotaUm.textContent;
    const tdAlunoNotaDois = aluno.querySelector(".info-notadois");
    const segundaNota = tdAlunoNotaDois.textContent;
    const tdMedia = aluno.querySelector(".info-media");

    const calculo = calculaMedia(primeiraNota, segundaNota);
    tdMedia.textContent =  calculo;

    if (calculo < 5){
        todosAlunos[i].style.backgroundColor = "#ff9999";
    }
    else{
        todosAlunos[i].style.backgroundColor = "#99ff99";
    } 
}