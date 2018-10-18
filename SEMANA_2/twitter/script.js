$(document).ready(function(){


$("#btn-submit").click(function(e){
    e.preventDefault();
    $("#xuxu").val();
    insereTweet();
    $('#xuxu').val('');
});

function insereTweet()
{
    /*let divInserir = document.querySelector(".tuites");
        divInserir.innerHTML = `
        <p id="pezinho">${$("#xuxu").val()}</p>
        `*/

        let d = new Date(); //Get the current date

        let month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
 
        $(".tuites").prepend(
        `
        <div class="jumbotron col-6 mt-4 mx-auto word-wrap break-word">
            <p class="h2">${$("#xuxu").val()}</p>
            <p h6>${d.getDate()} de ${month[d.getMonth()]}, ${d.getFullYear()} </p>
        </div>
        `
        )

}

function pegaNumeroCaracteres(){
    let charSobrando = 280 - $("#xuxu").val().length;
    
    $("#xuxu").removeClass('text-warning');
    $("#xuxu").removeClass('text-success');
    $("#xuxu").removeClass('text-danger');

    if (charSobrando <= 0){
        $("#xuxu").addClass('text-danger');
    }
    else if(charSobrando <=50)
    {
        $("#xuxu").addClass('text-warning');

    }
    else if(charSobrando <=200)
    {
        $("#xuxu").addClass('text-success');      
    }

    return $("#contador").text(`Você ainda tem ${charSobrando} caracteres`)
}
    $("#xuxu").keyup(function(){
        pegaNumeroCaracteres();

    });


})