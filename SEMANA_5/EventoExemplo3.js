const EmissorEvento = require('events');


class SomaValores extends EmissorEvento{
    
    enviarTotal(a,b){

        let soma = a + b;

        this.emit(soma);
        console.log(soma)
    }

}

module.exports= SomaValores