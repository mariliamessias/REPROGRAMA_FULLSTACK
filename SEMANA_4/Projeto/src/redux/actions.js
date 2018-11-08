export function logaUsuario(dados){
    return {
        type: 'LOGA_USUARIO',
       // dados: dados //dados é o que a pessoa preencheu no formulário = dados ou dados:dados é a mesma coisa
       dados 
      }
  }
  

export function  deslogaUsuario() {
    return{
        type:'DESLOGA_USUARIO'   
    }
}  