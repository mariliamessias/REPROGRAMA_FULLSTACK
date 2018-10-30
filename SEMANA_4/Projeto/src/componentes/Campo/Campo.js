import React, {Component} from 'react' // só podemos ter um import para isso colocamos entre chaves o Component
import './Campo.css'

/*
1) O componente pode mudar de estado? Sim // Class
2) Qual o estado inicial? state = { erro: '' } // constructor
3) O que muda? setState({ erro: '' }) ou  // setState({erro: 'Campo obrigatório'})
4) O que faz ele mudar?
// function onChange pra verificar se devo ou não mostrar uma mensagem de erro
if condição mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/
class Campo extends Component {
  constructor(props) {
    super(props)
    this.state = { erro: ''}
  }

  temErro(){
    return this.state.erro ? true :false
  }

  valida = (evento) => {
    const input = evento.target
    const {value , type}= input
    const { required, minLength } = this.props //destructing javascript // required = obrigatório
    let mensagem = ''
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (required && value.trim() === '') {
        mensagem = 'Campo Obrigatório'
    } else if (minLength && value.length < minLength) {
        mensagem = `Digite pelo menos ${minLength} caracteres` 
    } else if (type==='email' && !regex.test(value)) {
        mensagem = 'Valor inválido'
    } 
    this.setState({erro:mensagem})
    this.props.onChange()
  }

  render() {
    
    return (
      <div>
        <input 
          id={this.props.id}
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}
          onBlur={this.valida}
        />
        <p className="campo__erro">{this.state.erro}</p>
      </div>
    )
  }
}

export default Campo