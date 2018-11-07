import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './paginas/Home/Home'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Conta from './paginas/Conta/Conta'
import Navbar from './componentes/Navbar/Navbar'
import Login from './paginas/Login/Login'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'

//<Navbar usuario={usuario}/>  oara passar valor para o outra classe no caso a navbar

function App() {

  return (
    <div className="app">
      
      <Navbar/> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/conta" component={Conta}/>
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}

//Provider precisa ficar para que os filhos possam acessar

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('projeto')
)
