import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      spinner: false,
    };
  }

  onLogin = () => {
    this.setState({
      spinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        spinner: false,
      });
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
      button = this.state.spinner ? <Spinner size={'45px'} /> : <Login onLogin={this.onLogin} />;
    }

    return <div className="panel">{button}</div>;
  }
}

export default Auth;
