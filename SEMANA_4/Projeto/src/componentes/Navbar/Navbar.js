import React from 'react'
import logo from  './logo.png'
import Menu from '../Menu/Menu'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar(){

    return (
        <header className="navbar">
            <a href="/">
                <img className="navbar__logo" src={logo} alt="logo"/>
            </a>
         <Menu/>
        </header>
    )
}

export default Navbar