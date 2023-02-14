import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  CreateUser = obj => {
    // obj.formValue.preventDefault();

    console.log(obj);
  };

  render() {
    return <UserForm onSubmit={this.CreateUser} />;
  }
}

export default App;
