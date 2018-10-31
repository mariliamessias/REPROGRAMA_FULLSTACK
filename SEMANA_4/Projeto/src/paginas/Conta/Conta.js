import React , {Component}from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'


class Conta extends Component{
  constructor(props) {
    super(props)
    this.nomeRef = React.createRef()
    this.telRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    this.state = {desabilitado:true}
  }

  handlerChange=() =>{

    const campoNome = this.nomeRef.current
    const campoTelefone = this.telRef.current
    const campoEmail = this.emailRef.current
    const campoSenha =this.senhaRef.current

    if (campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro() || campoSenha.temErro()){
      this.setState({desabilitado:true})
    } else this.setState({desabilitado:false})

  }


  render(){
    return (
      <main className="conta">
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta!</p>
        
        <Legenda htmlFor="nome">Nome:</Legenda>
        <Campo 
          ref = {this.nomeRef}
          id="nome" 
          type="text" 
          name="nome" 
          placeholder="Nome" 
          required
          minLength={10}
          onChange={this.handlerChange}
        />
        
        <Legenda htmlFor="telefone">Telefone:</Legenda>
        <Campo 
          ref = {this.telRef}
          id="telefone" 
          type="tel" 
          name="telefone" 
          placeholder="Telefone"
          required
          onChange={this.handlerChange}
        />
        
        <Legenda htmlFor="email">Email:</Legenda>
        <Campo 
           ref = {this.emailRef}
          id="email" 
          type="email" 
          name="email"
          placeholder="Email"
          required
          onChange={this.handlerChange}
        />
        
        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo 
          ref = {this.senhaRef}
          id="senha" 
          type="password" 
          name="senha"
          placeholder="Senha"
          required
          minLength={6}
          onChange={this.handlerChange}
        />
        
        <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>

        <Link url="/login">Fazer login</Link>
      </main>
    )
  }
  
}

export default Conta