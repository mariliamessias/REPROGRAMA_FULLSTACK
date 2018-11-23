const SomaValores = require('./EventoExemplo3.js');
const somaFinal = new SomaValores();

somaFinal.on("soma", soma => {
    console.log(`O resultado da soma é ${soma}`)

}) 

somaFinal.enviarTotal(1,2);
