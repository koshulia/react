import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout isLoggedIn={this.state.isLoggedIn} />
        ) : (
          <Login isLoggedIn={this.state.isLoggedIn} />
        )}
      </div>
    );
  }
}

export default Auth;

// const button = this.state.isLoggedIn ? (
//   <button onClick={this.handleLogout}>Logout</button>
// ) : (
//   <button onClick={this.handleLogin}>Login</button>
// );

// let button;
// if (this.state.isLoggedIn) {
//   button = <button onClick={this.handleLogout}>Logout</button>;
// } else {
//   button = <button onClick={this.handleLogin}>Login</button>;
// }
