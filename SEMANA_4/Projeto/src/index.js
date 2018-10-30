import React from 'react'
import ReactDOM from 'react-dom'
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import './index.css'

const pagina = <Login />

const divisaoProjeto = document.getElementById('projeto')

ReactDOM.render(pagina, divisaoProjeto)
