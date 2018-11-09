import React, {Component} from 'react'
import './Home.css'
import {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
import Postit from '../../componentes/Postit/Postit'
import carregando from './loading.svg'
//recebe o usuário via props pois está chamando do store

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { carregando: false}
  }

  //se o usuário for nulo, será direcionado ao login
  render(){
    if (!this.props.usuario){
      return <Redirect to="/login/"/>
    }
    return(
     //se não tem usuário
    <main className="home">
      {this.state.carregando ? (
        <img className="home__loading" src={carregando} alt="Carregando"/>
      ) : (
        <div>
            <Postit/>
            <div>
              {this.props.postits.map(postit =>(
                  <Postit 
                    key={postit.id}
                    titulo = {postit.titulo}
                    texto = {postit.texto}
                  />
              ))}
            </div>
        </div>
      )}
    </main>
    )}
}

export default connect((state)=>({ 
  usuario:state.usuario , postits:state.postits}))(Home) // { chave do objeto, o ( é para que seja identificada a função
// não precisa passar a segunda pois o sistem, ja entende que é nulo


