import React, { Component } from 'react';

class Online extends Component {
  constructor(props) {
    super(props);
    this.onOnline = props.isOnline;
  }

  render() {
    return (
      <span className="status__text" onClick={this.onOnline}>
        All good!
      </span>
    );
  }
}
export default Online;
