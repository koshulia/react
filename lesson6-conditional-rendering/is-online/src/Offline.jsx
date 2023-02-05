import React, { Component } from 'react';

class Offline extends Component {
  constructor(props) {
    super(props);
    this.onOffline = props.onOffline;
  }

  render() {
    return (
      <>
        <span className="status__text" onClick={this.onOffline}>
          Offline
        </span>
        <button className="status__btn">Reconnect</button>
      </>
    );
  }
}
export default Offline;
