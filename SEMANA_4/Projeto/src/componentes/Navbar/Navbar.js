import React from 'react'
import logo from  './logo.png'
import Menu from '../Menu/Menu'
import {Link} from 'react-router-dom'

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

export default Navbar