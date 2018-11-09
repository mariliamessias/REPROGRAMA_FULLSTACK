import React, {Component} from 'react'
import {cadastraPostit} from '../../redux/actions'
import {connect} from 'react-redux'
import './Postit.css'

class Postit extends Component{
    constructor(props){
        super(props)
    }
    //essa função busca os dados do formulário e passa para a função
    //cadastraPostit para que assim execute a ação
    cadastraOuAlteraPostit = (evento) =>{
        //pegar os dados digitados 
        // enviar os dados chamando a função cadastra postit
        //como criamos o atributo name no form podemos acessar o campo pelo nome
        evento.preventDefault()
        const form = evento.target
        const dados = {
            id: `40705327-3dcc-4c0b-807c-4ded590af137'${Math.random(100)}`,
            titulo : form.titulo.value, // pega o texto que foi digitado no campo
            texto: form.texto.value
        }
        //disparou a ação para cadastrar
        this.props.cadastraPostit(dados) // passamos o objeto const dados com os dados para a função
        form.reset()
    }
    render(){
        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
                <input
                    className="postit__titulo"
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                />
                <textarea 
                    className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
                    autoComplete="off"
                    defaultValue={this.props.texto}
                />
                <button className="postit__botao-concluir">Concluído</button>
            </form>
        )
    }
}

export default connect(
    null, {cadastraPostit}  
)(Postit)