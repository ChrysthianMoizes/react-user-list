import React, { Component } from 'react';

export default class UserTable extends Component {

  handleRemoveUser = (user) => {
    this.props.removeUser(user)
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button type="button" onClick={() => {this.props.removeUser(user)}} className="btn btn-outline-danger btn-sm">Remover</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
