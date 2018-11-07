import React from 'react'
import './Home.css'
import {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
//recebe o usuário via props pois está chamando do store
function Home(props) {

  //se o usuário for nulo, será direcionado ao login
  if (!props.usuario){
    return <Redirect to="/login/"/>
  }
  
  return (
     //se não tem usuário
    <main className="home">
    </main>
  )
}

function passaDadosDoEstadoNoProps(state){
    return{
      usuario:state.usuario
    }
}
// não precisa passar a segunda pois o sisem, ja entende que é nulo
const conectaNaStore = connect(passaDadosDoEstadoNoProps)

const HomeConectado = conectaNaStore(Home)

export default HomeConectado