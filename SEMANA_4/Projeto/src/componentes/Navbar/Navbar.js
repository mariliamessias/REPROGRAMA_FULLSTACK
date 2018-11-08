import React from 'react'
import {connect,Provider} from 'react-redux'
import logo from  './logo.png'
import Menu from '../Menu/Menu'
import {deslogaUsuario} from '../../redux/actions'
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

export default withRouter(connect((state)=>({ usuario:state.usuario }), {deslogaUsuario}) (Navbar))
