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

  goOnline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline === true ? <Online /> : <Offline goOnline={this.goOnline} />}
      </div>
    );
  }
}

export default Status;
