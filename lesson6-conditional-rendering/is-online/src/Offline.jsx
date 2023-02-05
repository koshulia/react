import React, { Component } from 'react';

class Offline extends Component {
  constructor(props) {
    super(props);
    this.onOffline = props.isOffline;
  }

  render() {
    return (
      <>
        <span className="status__text">Offline</span>
        <button className="status__btn" onClick={this.onOffline}>
          Reconnect
        </button>
      </>
    );
  }
}
export default Offline;
