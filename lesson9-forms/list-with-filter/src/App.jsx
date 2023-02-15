import React, { Component } from 'react';
import UsersList from './UsersList';

class App extends Component {
  CreateUser = obj => {
    console.log(obj);
  };

  render() {
    return <UsersList onSubmit={this.CreateUser} />;
  }
}

export default App;
