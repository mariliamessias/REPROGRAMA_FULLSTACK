import React from 'react'
import './Campo.css'

//component tudo que o react disponibiliza de componentes de classe para usar
//apenas com classe podemos usar o objeto state

class Campo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      erro:''
    }

    //quando a função valida for chamada, o this sempre será a classe campo
    //this.valida = this.valida.bind(this)
  }

  valida = (evento) =>{
    //console.log('alvo', evento.target)
    const alvo = evento.target;
    if (this.props.obrigatorio && alvo.value === ''){
      const state = {
        erro: 'campo obrigatório'
      }
      this.setState(state)
    }
  }

  //sempre precisa ter a função render para passar o html par a tela
  render(){
    return (
    <div>
      <input 
        id={this.props.id}
        className="campo"
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.valida}
      />
      <p className='grupo__erro'>{this.state.erro}</p>
     </div>
    )
  }
}

export default Campo