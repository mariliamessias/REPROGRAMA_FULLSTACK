
var btnEnviar = document.getElementById("enviar");
var msg= document.getElementById("emailMsg");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

btnEnviar.addEventListener("click", validaEmail);

function validaEmail(event) {
    msg.textContent = "";
    var email = document.getElementById("newsInputEmail");
    event.preventDefault();

    if(!filter.test(email.value)){
        email.style.backgroundColor="#ffb3b3";
        msg.textContent="Por gentileza informar email válido!";
    }
    else{
        email.style.backgroundColor="#b3ffcc";
        msg.textContent="Email cadastrado com sucesso: "+ email.value;
    } 
}