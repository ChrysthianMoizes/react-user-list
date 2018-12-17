import React, { Component } from 'react';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';

export default class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  addNewUser = (nome, email) => {

    let newUser = {
      id: this.state.users.length + 1,
      name: nome,
      email: email
    };
    this.setState({
      user: this.state.users.push(newUser)
    });
  }

  removeUser = (user) => {

    const newArray = this.state.users.filter(item => item.id !== user.id);
    console.log(newArray);
    this.setState({
      users: newArray
    });
  }

  render() {
    return (
      <div>
        <UserForm
          addNewUser={this.addNewUser}
        />
        <UserTable
          users={this.state.users}
          removeUser={this.removeUser}
        />
      </div>
    );
  }
}
