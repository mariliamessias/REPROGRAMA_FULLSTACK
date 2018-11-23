/*const enviaMensagem = require('./exemploEvento2.js');

enviaMensagem.events.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem"${mensagem}" foi enviada com sucesso!`);
});

enviaMensagem.enviar('Olá Mundo');

*/
const enviaMensagem = require('./exemploEvento2.js')
const mensagem = new enviaMensagem();

mensagem.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi recebida com sucesso.`);
});

mensagem.enviar("Olá mundo!")
