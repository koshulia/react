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

    this.changeLoginState = () => {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    };
  }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout changeLoginState={this.changeLoginState} />
        ) : (
          <Login changeLoginState={this.changeLoginState} />
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
