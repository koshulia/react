import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }

  onOnline = () => {
    this.setState({
      isOnline: false,
    });
  };

  onOffline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline onOffline={this.onOffline} />}
      </div>
    );
  }
}

export default Status;
