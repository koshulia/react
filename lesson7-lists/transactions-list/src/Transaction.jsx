import React from 'react';
import moment from 'moment';

const formatTime = time => moment(time).format('HH:mm');

const formatDate = date => moment(date).format('DD MMM');

const formatNum = num => new Intl.NumberFormat('en-GB').format(num);

const Transaction = ({ from, to, amount, rate, time }) => (
  <li className="transaction">
    <span className="transaction__date">{formatDate(time)}</span>
    <span className="transaction__time">{formatTime(time)}</span>
    <span className="transaction__assets">
      {from} → {to}
    </span>
    <span className="transaction__rate">{rate}</span>
    <span className="transaction__amount">{formatNum(amount)}</span>
  </li>
);

export default Transaction;
