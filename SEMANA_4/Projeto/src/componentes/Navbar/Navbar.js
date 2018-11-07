import React from 'react'
import {connect,Provider} from 'react-redux'
import logo from  './logo.png'
import Menu from '../Menu/Menu'
import {Link, withRouter} from 'react-router-dom'

import './Navbar.css'

//quando a função trabalha com propriedades (props), ela recebe ele como parâmetro

//<Menu usuario={props.usuario}/> passando o valor recebido do index para a classe menu
function Navbar(props){  

    return (
        <header className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="logo"/>
            </Link>
         <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>
        </header>
    )
}

function pegaDadosDoEstado(state){
    return {
        usuario:state.usuario
    }
}

function passaDisparadoresDeAcao(dispatch){
    return{
        deslogaUsuario: () => {
            const acao = {
                type:'DESLOGA_USUARIO'   
            }
            dispatch(acao)
        }  
    }
}

const conectaNaStore = connect(pegaDadosDoEstado, passaDisparadoresDeAcao)
const NavbarConectado = conectaNaStore (Navbar)

export default withRouter(NavbarConectado)

//withRouter - permite que atualize o componemte toda vez que a 
//rota(página) mudar // usar só quando usamos navlink