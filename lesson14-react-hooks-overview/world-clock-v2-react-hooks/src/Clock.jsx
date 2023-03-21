import React, { useEffect, useState } from 'react';
import './clock.scss';
import moment from 'moment';

const formatTime = time => moment(time).format('hh:mm:ss A');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [clockState, setClockState] = useState({
    currentLocation: location,
    currentTime: getTimeWithOffset(offset),
  });

  const { currentLocation, currentTime } = clockState;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockState({
        currentLocation,
        currentTime: moment(clockState.currentTime).add(1, 's'),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{currentLocation}</div>
      <div className="clock__time">{formatTime(currentTime)}</div>
    </div>
  );
};

export default Clock;
