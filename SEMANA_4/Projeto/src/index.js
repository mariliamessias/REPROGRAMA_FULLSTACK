import React from 'react'
import {connect,Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './paginas/Home/Home'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Conta from './paginas/Conta/Conta'
import Navbar from './componentes/Navbar/Navbar'
import Login from './paginas/Login/Login'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './index.css'

//<Navbar usuario={usuario}/>  oara passar valor para o outra classe no caso a navbar

function App(props) {

  const usuario = props.usuario
  const deslogaUsuario = props.deslogaUsuario
  const logaUsuario = props.logaUsuario

  return (
    <div className="app">
      
      <Navbar usuario={usuario} deslogaUsuario = {deslogaUsuario}/> 

      <Switch>
        <Route path="/" exact render={() => {
          return usuario ? <Home /> : <Redirect to="/login" />
        }} />

        <Route path="/login" render={(props) => {
          return <Login historico={props.history} logaUsuario={logaUsuario} />
        }}/>

        <Route path="/conta" component={Conta}/>
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}

function passaDadosDoEstadoParaMeuComponente(state){
  const props = {
    usuario : state.usuario
  }
  return props
}

function passaFuncoesQueDisparamAcoesViaProps(dispatch){
  const props = {
    logaUsuario : (dados) =>{
      const acao = {
        type: 'LOGA_USUARIO',
        dados: dados
      }
      dispatch(acao)
    },
    deslogaUsuario : () =>{
      const acao = {
        type: 'DESLOGA_USUARIO'
      }
      dispatch(acao)
    }
  }
  return props
}

const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente, passaFuncoesQueDisparamAcoesViaProps)

const AppConectada = conectaNaStore(App) //componente criado pela função

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppConectada/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('projeto')
)
