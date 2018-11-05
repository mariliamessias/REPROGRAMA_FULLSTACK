import {combineReducers} from 'redux'

const usuarioInicial = null

function usuario(state = usuarioInicial,action) {
    switch (action.type){
        case 'LOGA_USUARIO':
            const usuarioLogado = action.dados
            return usuarioLogado
        case 'DESLOGA_USUARIO': 
            const usuarioDeslogado = null
            return usuarioDeslogado  
        default: 
            return state
    }
}

// postitsAtuais = [] a primeira vez que abrir a página não haverá postits por isso array vazio
function postits(postitsAtuais = [], action)
{
    switch (action.type){
        default: 
            return postitsAtuais
    }
}

const reducers = combineReducers({
    usuario: usuario, // guarda a função usuário
    postits: postits // guarda a função postits
})

export default reducers