import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = props.onLogin;
  }

  render() {
    return (
      <button className="btn login" onClick={this.onLogin}>
        Login
      </button>
    );
  }
}
export default Login;
