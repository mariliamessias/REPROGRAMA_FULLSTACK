import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Link(props)
{
    return (
        <a className="link" href={props.url}>
            {props.children}
        </a>
    )
}

function Botao(props){
    let classes = "botao";
    if (props.desabilitado)
    {
        classes +=" botao--desabilitado";
    }

    return (
        <input className={classes} type="submit" value={props.children}></input>
    )
}

const paginaLogin = (
    <main className = "pagina-login">
        <h1>Login</h1>
        <p>Entre com seu email e senha</p>        
        <Botao desabilitado>Enviar</Botao>
        <Botao>Enviar</Botao>

        <Link url="/conta">Criar uma Conta</Link>
        <Link url="/login">Fazer Login</Link>

    </main>
)
ReactDOM.render(paginaLogin, document.getElementById("projeto"))
