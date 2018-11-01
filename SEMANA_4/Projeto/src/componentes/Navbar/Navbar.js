import React from 'react'
import logo from   './logo.png'
import './Navbar.css'

function Navbar(){

    return (
        <header className="navbar">
            <a href="/">
                <img className="navbar__logo" src={logo} alt="logo"/>
            </a>
        {/*menu*/}
        </header>
    )
}

export default Navbar