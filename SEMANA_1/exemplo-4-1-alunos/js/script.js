window.addEventListener("load", function(){
    imprimeTabelaDoHTML(document.querySelectorAll(".aluno"));
});

function imprimeTabelaDoHTML(todosAlunos){
    
//const todosAlunos = document.querySelectorAll(".aluno"); // pega todos os elementos da classe aluno
    todosAlunos.forEach(function(aluno){ // pára cada item do array

        const primeiraNota = aluno.querySelector(".info-notaum").textContent;
        const segundaNota = aluno.querySelector(".info-notadois").textContent;
        let calculo = calculaMedia(primeiraNota, segundaNota);
    
        if (calculo < 5) aluno.style.backgroundColor = "#ff9999";
        else aluno.style.backgroundColor = "#99ff99";
        aluno.querySelector(".info-media").textContent = calculo.toFixed(2);  
    });

}
