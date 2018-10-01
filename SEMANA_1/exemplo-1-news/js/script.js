
var btnEnviar = document.getElementById("enviar");

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

btnEnviar.addEventListener("click", validaEmail);

function validaEmail(event) {

    var email = document.getElementById("newsInputEmail");
    event.preventDefault();

    if(!filter.test(email.value)){
        email.style.backgroundColor="#ffb3b3";
    }
    else{
        email.style.backgroundColor="#b3ffcc";
    } 
}