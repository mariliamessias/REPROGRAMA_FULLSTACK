
var btnEnviar = document.getElementById("loginEnviar");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
btnEnviar.addEventListener("click", validaLogin);
var login = document.getElementById("loginInputEmail");
var mensagem = document.getElementById("msgLogin");

function validaLogin(){
    event.preventDefault(event);
    var senha = document.getElementById("loginInputPassword");
    mensagem.textContent = "";
    if (!filter.test(login.value)&& !senha.value){
     login.style.backgroundColor = "#ff9999";
     senha.style.backgroundColor = "#ff9999";
     mensagem.textContent = "Informe um login e uma senha válidos!";
    }else{
        if (!filter.test(login.value)){
            login.style.backgroundColor = "#ff9999";
            senha.style.backgroundColor = "#80ff80";
            mensagem.textContent = "Informe um email válido!";
        }else if (!senha.value) {
            login.style.backgroundColor = "#80ff80";
            senha.style.backgroundColor = "#ff9999";
            mensagem.textContent = "Informe uma senha válida!";
        } else{
            login.style.backgroundColor = "#80ff80";
            senha.style.backgroundColor = "#80ff80";  
            mensagem.textContent = "login realizado com sucesso!";
        }
    }

}