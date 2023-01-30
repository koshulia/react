import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLoggedIn: props.isLoggedIn,
    // };
    this.changeLoginState = props.changeLoginState;
    // console.log(props.);
  }

  // onLogin = () => {
  //   this.setState({
  //     isLoggedIn: true,
  //   });
  //   console.log(this.state);
  // };

  render() {
    return (
      <button className="btn login" onClick={this.changeLoginState}>
        Login
      </button>
    );
  }
}
export default Login;
