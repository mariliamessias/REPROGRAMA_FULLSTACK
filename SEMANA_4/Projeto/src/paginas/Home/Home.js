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

export default connect((state)=>({ usuario:state.usuario }))(Home) // { chave do objeto, o ( é para que seja identificada a função
// não precisa passar a segunda pois o sisem, ja entende que é nulo


