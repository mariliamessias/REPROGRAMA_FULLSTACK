const EventEmitter = require('events');
const event = new EventEmitter();

//mensagemEnviada = nome do evento
// o segundo parâmetro é o callBack
/*
event.on('mensagemEnviada', function()
{
    console.log('Ouvi esse evento!')
})

*/

event.emit('mensagemEnviada');

event.on('mensagemEnviada', function(flub){
    console.log('Ouvi o evento', flub.nomedoEvento);
})

event.emit('mensagemEnviada', {nomedoEvento: 'mensagemEnviada'} );