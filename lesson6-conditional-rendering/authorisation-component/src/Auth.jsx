import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoading: true,
    });

    const timerId = setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });

      clearTimeout(timerId);
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.onLogout} />;
    } else {
      button = this.state.isLoading ? <Spinner size={'45px'} /> : <Login onLogin={this.onLogin} />;
    }

    return <div className="panel">{button}</div>;
  }
}

export default Auth;
