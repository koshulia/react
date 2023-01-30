import React, { Component } from 'react';

class Login extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       isLoggedIn: props.isLoggedIn,
  //     };
  //   }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <button className="btn login" onClick={this.onLogin}>
        Login
      </button>
    );
  }
}
export default Login;
