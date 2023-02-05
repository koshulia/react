import React, { Component } from 'react';

class Offline extends Component {
  constructor(props) {
    super(props);
    this.goOnline = props.goOnline;
  }

  render() {
    return (
      <>
        <span className="status__text">Offline</span>
        <button onClick={this.goOnline} className="status__btn">
          Reconnect
        </button>
      </>
    );
  }
}
export default Offline;
