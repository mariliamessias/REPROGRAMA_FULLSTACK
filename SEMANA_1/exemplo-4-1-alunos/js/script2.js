notaUmValida = document.getElementById("notaum");
notaDoisValida = document.getElementById("notadois");
nomeValida = document.getElementById("nome");

function calculaMedia(nota1, nota2){
    
    return ( parseFloat(nota1) + parseFloat(nota2) )/2;
}

function validaNota(n1, n2){
    
    if((n1<0 || n1>10) && (n2<0 || n2>10)){
        notaUmValida.style.borderColor = "red";
        notaDoisValida.style.borderColor = "red";
        return false;
    }
    else if(n1<0 || n1>10){
        notaUmValida.style.borderColor = "red";
        notaDoisValida.style.borderColor = "#ccc";
        return false;
    }
    else if(n2<0 || n2>10)
    {
        notaDoisValida.style.borderColor = "red";
        notaUmValida.style.borderColor = "#ccc";
        return false;

    } else
    { 
        notaDoisValida.style.borderColor = "#ccc";
        notaUmValida.style.borderColor = "#ccc";
        return true;
    }

}

function validaVazio(nome, nota1, nota2)
{
    if(nome == "" && nota1 == "" && nota2 == "")
    {
        nomeValida.style.borderColor = "red";
        notaUmValida.style.borderColor = "red";
        notaDoisValida.style.borderColor = "red";
    }
    else if(nome == "")
    {
        nomeValida.style.borderColor = "red";
        notaUmValida.style.borderColor = "#ccc";
        notaDoisValida.style.borderColor = "#ccc";
        return false;
    }
    else if (nota1 == "")
    {
        notaUmValida.style.borderColor = "red";
        nomeValida.style.borderColor = "#ccc";
        notaDoisValida.style.borderColor = "#ccc";
        return false;
    }
    else if (nota2 == "")
    {
        notaDoisValida.style.borderColor = "red";
        nomeValida.style.borderColor = "#ccc";
        notaUmValida.style.borderColor = "#ccc";
        return false;
    }
    else
    {
        nomeValida.style.borderColor = "#ccc";
        notaUmValida.style.borderColor = "#ccc";
        notaDoisValida.style.borderColor = "#ccc";   
        return true;
    } 
}

function limpaCampos(){
    
    nomeValida.value = "";
    notaUmValida.value = "";
    notaDoisValida.value = "";
}