import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'


class Menu extends Component {

    constructor(props) {
        super(props) // classe mãe usa essa classe
        this.state = { aberto: false }
    }
    //state guarda o estado do objeto
    // quando é uma classe o props recebe pelo construtor
        
    abreOuFechaMenu = (evento) =>
    {
        //evento.preventDefault()
        if (this.state.aberto){
            this.setState({aberto:false})
        }else{
            this.setState({aberto:true})
        }
    }

    sair = () =>
    {
        this.abreOuFechaMenu()
        this.props.deslogaUsuario()
    }

    render() {

        let classesDoBotao ='navbar-menu__botao'
        let classesDasOpcoes ='navbar-menu__opcoes'
        if (this.state.aberto)
        {   
            //o que ficará dentro da variavel no final é o nome da classe dela + a classe nova
            classesDoBotao += " navbar-menu__botao--aberto"
            classesDasOpcoes += " navbar-menu__opcoes--aberto"
        }

        return (
            <nav className="navbar-menu">
                <button className={classesDoBotao} onClick={this.abreOuFechaMenu}>Menu</button>
                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>Quem somos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>Contato</NavLink>
                    </li>
                    {this.props.usuario? (
                         <li>
                         <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>Sair</NavLink>
                        </li>
                    ) : (
                        <li>
                         <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>Login</NavLink>
                        </li>
                    )}
                   
                </ul>
            </nav>
        )
    }

}

export default Menu