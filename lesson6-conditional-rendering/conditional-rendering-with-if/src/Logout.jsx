import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLoggedIn: props.isLoggedIn,
    // };
    this.changeLoginState = props.changeLoginState;
    console.log(props);
  }

  // onLogout = () => {
  //   this.setState({
  //     isLoggedIn: false,
  //   });
  // };

  render() {
    return (
      <button className="btn logout" onClick={this.changeLoginState}>
        Logout
      </button>
    );
  }
}
export default Logout;
