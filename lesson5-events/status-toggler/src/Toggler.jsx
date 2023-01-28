import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className="toggler" onClick={this.toggle}>
        {this.state.isActive ? 'On' : 'Off'}
      </div>
    );
  }
}

export default Toggler;
