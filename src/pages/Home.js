import React, { Component } from 'react';
import NavBar from '../components/NavBar';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
