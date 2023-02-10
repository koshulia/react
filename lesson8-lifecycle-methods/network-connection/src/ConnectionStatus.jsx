import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    connection: true,
  };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.onOffline);
  }

  onOffline = e => {
    this.setState({
      connection: e.target.navigator.onLine,
    });
  };

  render() {
    return (
      <>
        {this.state.connection ? (
          <div className="status">Online</div>
        ) : (
          <div className="status status_offline">Offline</div>
        )}
      </>
    );
  }
}

export default ConnectionStatus;
