import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.onLogout = props.onLogout;
  }

  render() {
    return (
      <button className="btn logout" onClick={this.onLogout}>
        Logout
      </button>
    );
  }
}
export default Logout;
