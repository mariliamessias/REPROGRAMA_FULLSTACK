import React , {Component} from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'

class Login extends Component {

//tudo que a função construtora recebe para conseguir construir os objetos
constructor(props) {
  super(props) 
  this.emailRef = React.createRef() // criadas pois embaixo no render vamos usar
  this.senhaRef = React.createRef()
  this.state = { desabilitado:true }
}

handlerChange = () => {

  const campoEmail = this.emailRef.current //current pega o this da classe que está sendo referenciada
  const campoSenha = this.senhaRef.current
  
  if (campoEmail.temErro() || campoSenha.temErro())
  {
    this.setState({desabilitado:true})
  } else this.setState({desabilitado:false})

}

render() {
    return (
      <main className="login">
        <h1>Login</h1>
        <p>Entre com seu email e senha.</p>
        
        <Legenda htmlFor="email">Email:</Legenda>
        
        <Campo 
         //Campo é a instância da classe campo
          ref = {this.emailRef} // para buscar um valor em outro arquivo // guarda a referência aqui 
          id="email" 
          type="email" 
          name="email"
          placeholder="Email"
          required
          onChange={this.handlerChange}
        />
        
        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo 
          ref = {this.senhaRef} // permite chamar qualquer função que existe dentro da classe campo
          id="senha" 
          type="password" 
          name="senha"
          placeholder="Senha"
          required
          minLength={6}
          onChange={this.handlerChange}
        />
        
        <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>

        <Link url="/conta">Criar uma conta</Link>
      </main>
    )
  }
}

export default Login