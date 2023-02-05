import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
      isOffline: false,
    };
  }

  // onOnline = () => {
  //   this.setState({
  //     isOnline: true,
  //   });
  // };

  // onOffline = () => {
  //   this.setState({
  //     isOnline: true,
  //   });
  // };

  render() {
    let status;
    if (this.state.isOnline) {
      status = <Online />;
    } else if (!this.state.isOffline) {
      status = <Offline />;
    }
    return <div className="status">{status}</div>;
  }
}

export default Status;
