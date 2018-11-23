/*const EventEmitter = require('events');
const events = new EventEmitter();

function enviar(mensagem){
    console.log('Enviando memsagem', mensagem);
    events.emit('mensagemEnviada', mensagem);
}

module.exports.enviar = enviar;
module.exports.events = events;

*/

const EventEmitter = require('events');

class EnviarMensagem extends EventEmitter{
    enviar(mensagem){
        console.log('Enviando mensagem', mensagem);
        this.emit('mensagemEnviada', mensagem);
    }
}

module.exports = EnviarMensagem;