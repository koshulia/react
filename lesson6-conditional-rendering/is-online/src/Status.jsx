import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
    };
  }

  onOnline = () => {
    this.setState({
      isOnline: true,
    });
  };

  onOffline = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? (
          <Online isOnline={this.onOnline} />
        ) : (
          <Offline isOnline={this.onOffline} />
        )}
      </div>
    );
  }
}

export default Status;
