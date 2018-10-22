const linkCriarUmaConta = document.createElement('a');
const linkFazerLogin = document.createElement('a');
const formulario = document.createElement('form');
const divisaoProjeto = document.getElementById("projeto");

formulario.className = "formulario";

linkCriarUmaConta.className = "link";
linkCriarUmaConta.href = "/conta";
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'));

formulario.appendChild(linkCriarUmaConta);

linkFazerLogin.className = "link";
linkFazerLogin.href = "/login";
linkFazerLogin.appendChild(document.createTextNode('Fazer Login'));
formulario.appendChild(linkFazerLogin);

divisaoProjeto.appendChild(formulario);
