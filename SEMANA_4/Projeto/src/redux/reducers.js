import {combineReducers} from 'redux'

let usuarioInicial = null
const json = localStorage.getItem('usuario') // tento pegar o item usuário, ou retornar undefined ou o usuário do json que está logado

if (json){
    usuarioInicial = JSON.parse(json) // precisa converter para objeto para passar como parâmetro, ele era texto
}

function usuario(state = usuarioInicial,action) {
    switch (action.type){
        case 'LOGA_USUARIO':
            const usuarioLogado = action.dados
            const json = JSON.stringify(usuarioLogado) // objeto que será convertido em texto
            localStorage.setItem('usuario',json)
            return usuarioLogado
        case 'DESLOGA_USUARIO': 
            localStorage.removeItem('usuario')
            const usuarioDeslogado = null
            return usuarioDeslogado  
        default: 
            return state
    }
}

// postitsAtuais = [] a primeira vez que abrir a página não haverá postits por isso array vazio
function postits(estadoAtualdePostits = [], action)
{
    switch (action.type){
        case 'CADASTRA_POSTIT': 
            
        return estadoAtualdePostits.concat(action.dados)
        default: 
            return estadoAtualdePostits
    }
}

const reducers = combineReducers({
    usuario: usuario, // guarda a função usuário
    postits: postits // guarda a função postits
})

export default reducers