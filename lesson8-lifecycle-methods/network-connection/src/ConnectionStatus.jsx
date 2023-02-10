import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    connection: true,
  };

  componentDidMount() {
    window.addEventListener('offline', this.onConnectionStatus);
    window.addEventListener('online', this.onConnectionStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.onConnectionStatus);
    window.removeEventListener('online', this.onConnectionStatus);
  }

  onConnectionStatus = e => {
    this.setState({
      connection: e.target.navigator.onLine,
    });
  };

  render() {
    return (
      <>
        {this.state.connection ? (
          <div className="status">online</div>
        ) : (
          <div className="status status_offline">offline</div>
        )}
      </>
    );
  }
}

export default ConnectionStatus;
