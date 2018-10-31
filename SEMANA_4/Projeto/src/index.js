import React from 'react'
import ReactDOM from 'react-dom'
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import {BrowserRouter, Switch, Route} from 'react-router-dom' // esse componente irá abraçar tudo que tem no site

import './index.css'

function App(){
    return (
        <div className="app">
            {/*<NavBar>*/}
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/conta" component={Conta}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/quem-somos" component={QuemSomos}/>
                    <Route path="/contato" component={Contato}/>
                </Switch>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('projeto')
) 
// só recebe uma tela por vez

//associação URL com o Componente = chamado de rota