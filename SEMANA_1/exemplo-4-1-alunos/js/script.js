const todosAlunos = document.querySelectorAll(".aluno"); // pega todos os elementos da classe aluno

for (let i = 0; i < todosAlunos.length; i++)
{
    //console.log(todosAlunos[i]);
    // que uma aluna, vai assumir a primeira posicao
    const aluno = todosAlunos[i];
    const tdAlunoNotaUm = aluno.querySelector(".info-notaum");
    const primeiraNota = tdAlunoNotaUm.textContent;
    const tdAlunoNotaDois = aluno.querySelector(".info-notadois");
    const segundaNota = tdAlunoNotaDois.textContent;
    const tdMedia = aluno.querySelector(".info-media");

    const calculo = (parseFloat(primeiraNota) + parseFloat(segundaNota )) / 2;

    tdMedia.textContent = calculo.toFixed(2);
}