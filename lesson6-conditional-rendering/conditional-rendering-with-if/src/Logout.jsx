import React, { Component } from 'react';

class Logout extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       isLoggedIn: props.isLoggedIn,
  //     };
  //   }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <button className="btn logout" onClick={this.onLogout}>
        Logout
      </button>
    );
  }
}
export default Logout;
