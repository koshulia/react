import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  CreateUser = obj => {
    // event.preventDefault();

    console.log(obj);
  };

  render() {
    return <UserForm onSubmit={this.CreateUser} />;
  }
}

export default App;
