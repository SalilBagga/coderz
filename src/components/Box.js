import React from 'react';

export default function Box({ seatstate }) {
  return <div className={`w-4 h-4 mx-1 my-1 ${seatstate} `}></div>;
}
