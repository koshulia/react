import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
      isOffline: true,
    };
  }

  // goOnline = () => {
  //   this.setState({
  //     isOnline: true,
  //     isOffline: false,
  //   });
  // };

  // goOffline = () => {
  //   this.setState({ isOffline: true, isOnline: false });
  // };

  render() {
    return (
      <div className="status">
        {this.state.isOnline && <Online />}
        {!this.state.isOffline && <Offline />}
      </div>
    );
  }
}

export default Status;
