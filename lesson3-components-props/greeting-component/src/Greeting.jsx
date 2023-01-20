import React from 'react';
import moment from 'moment';

const fullAge = date => moment(date).fromNow(true);
export default function Greeting(props) {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {fullAge(props.birthDate)} old
    </div>
  );
}
