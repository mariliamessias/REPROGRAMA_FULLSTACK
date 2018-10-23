const linkCriarUmaConta = React.createElement("a", {className:"link", href:"/conta", children:'Criar uma Conta'});
const linkFazerLogin = React.createElement("a", {className:"link", href:"/login", children:'Fazer login'});
const formularioLogin = React.createElement("form", {children: [linkCriarUmaConta, linkFazerLogin]});

const divisaoProjeto = document.getElementById("projeto");

ReactDOM.render(formularioLogin, divisaoProjeto);
