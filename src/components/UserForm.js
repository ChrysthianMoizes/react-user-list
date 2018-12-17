import React, { Component } from 'react';

export default class UserForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    if(!this.inputName.value){
      alert('Preencha o campo Nome');
      return;
    }

    if(!this.inputEmail.value){
      alert('Preencha o campo Email');
      return;
    }

    this.props.addNewUser(this.inputName.value, this.inputEmail.value);
    this.inputName.value = '';
    this.inputEmail.value = '';
  }

  render() {
    return (
      <form className="form-inline form-row" onSubmit={this.handleSubmit}>

        <label className="sr-only" for="inlineFormInputName2">Nome</label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Digite seu nome"
          ref={input => this.inputName = input}
        />

        <label className="sr-only" for="inlineFormInputGroupUsername2">Email</label>
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
          </div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder="Digite seu email"
            ref={input => this.inputEmail = input}
          />
        </div>

        <button type="submit" className="btn btn-outline-success">Salvar</button>

      </form>
    );
  }
}
