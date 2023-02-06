import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.isOnline = true;
  }

  render() {
    return <div className="status">{this.isOnline ? <Online /> : <Offline />}</div>;
  }
}

export default Status;
