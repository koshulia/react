import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const formatTime = time => moment(time).format('hh:mm:ss A');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      currentTime: getTimeWithOffset(props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: moment(this.state.currentTime).add(1, 's'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{formatTime(this.state.currentTime)}</div>
      </div>
    );
  }
}

export default Clock;
