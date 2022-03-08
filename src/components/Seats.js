import React, { useEffect, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';

import Box from './Box';
export default function Seats({
  username,
  bookingarray,
  noseats,
  price,
  selectedSeats,
  setSelectedSeats,
  moviedata,
}) {
  const [totalSeats, setTotalSeats] = useState(0);
  const url = `http://localhost:3000/films/${moviedata.id}`;
  const { patchData } = useFetchData(url, 'PATCH');

  const handlePUT = () => {
    let temp = moviedata;
    let temparr = selectedSeats;
    temparr = temparr.map((item) => {
      if (item === 1) {
        return username;
      }
      if (typeof item == 'string') {
        return item;
      }
      return 0;
    });
    temp.booking_array = temparr;
    console.log(temparr);
    patchData(temp);
    setTotalSeats(0);
  };

  useEffect(() => {
    if (bookingarray.length > 0) {
      setSelectedSeats(bookingarray);
      console.log('unava');
    } else {
      let temp = new Array(noseats).fill(0);
      setSelectedSeats(temp);
      console.log('ava');
    }
  }, [bookingarray, noseats, setSelectedSeats]);

  const handleOnclick = (index) => {
    let temparr = selectedSeats;
    if (temparr[index] === 0) {
      temparr.splice(index, 1, 1);
      setSelectedSeats([...temparr]);
      setTotalSeats(totalSeats + 1);
    } else {
      temparr.splice(index, 1, 0);
      setSelectedSeats([...temparr]);
      setTotalSeats(totalSeats > 0 ? totalSeats - 1 : 0);
    }
  };
  console.log('rendering');

  return (
    <div>
      <div className="mx-auto mt-2 mb-10 h-8 flex rounded-md py-4 justify-evenly items-center bg-light-grey w-[85%]">
        <div className="flex">
          <Box seatstate="bg-white" />
          <span className="text-sm">N/A</span>
        </div>
        <div className="flex">
          <Box seatstate="bg-seat-selected" />
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex">
          <Box seatstate="bg-seat-occu" />
          <span className="text-sm">Occupied</span>
        </div>
      </div>
      <div className="mx-auto mt-2 place-items-center gap-4 py-4 px-4 rounded-md  grid grid-cols-8 bg-light-grey w-[80%] h-[80%]">
        {selectedSeats.map((data, index) => (
          <div key={index}>
            {data === 0 && (
              <div onClick={() => handleOnclick(index)} className="cursor-pointer">
                <Box seatstate="bg-white" />
              </div>
            )}
            {data === 1 && (
              <div onClick={() => handleOnclick(index)} className="cursor-pointer">
                <Box seatstate="bg-seat-selected" />
              </div>
            )}
            {typeof data === 'string' && (
              <div className="cursor-not-allowed">
                <Box seatstate="bg-seat-occu" />
              </div>
            )}
          </div>
        ))}
      </div>
      <h1>
        No of Seats {totalSeats} and Price {totalSeats > 0 ? price * totalSeats : 0}
      </h1>
      <button
        className="border-1 px-2 py-1 rounded-md border-booking-grey text-booking-grey hover:bg-booking-grey hover:text-white mt-4"
        onClick={() => handlePUT(moviedata.id)}
      >
        Book
      </button>
    </div>
  );
}
