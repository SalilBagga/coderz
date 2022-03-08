import React, { useState, useContext } from 'react';

import FilmDetails from './FilmDetails';
import Seats from './Seats';

import { useFetchData } from '../hooks/useFetchData';
import { UserContext } from '../context/UserContext';
export default function Booking() {
  const { data } = useFetchData('http://localhost:3000/films');
  const context = useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  let username = context.user;

  return (
    <div>
      <select
        name="filmslist"
        id="filmslist"
        className="mb-4"
        onChange={(e) => setCurrentIndex(e.target.value)}
      >
        <option value="">Select Movie</option>
        {data &&
          data.map((data, index) => (
            <option key={index} value={index}>
              {data.Title}
            </option>
          ))}
      </select>
      {currentIndex && (
        <div className="grid gap-x-4 grid-cols-3">
          <div className="bg-booking-grey h-[70vh] flex flex-col ml-4 items-center rounded-lg">
            <img src={data[currentIndex].Poster} alt="poster" className="h-[95%] mx-auto pt-4" />
          </div>
          <div className="  h-[70vh]">
            <div>
              <Seats
                username={username}
                bookingarray={data[currentIndex].booking_array}
                noseats={data[currentIndex].seats}
                price={data[currentIndex].Price}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                moviedata={data[currentIndex]}
              />
            </div>
          </div>
          <div className="bg-booking-grey h-[70vh] flex mr-4 items-center rounded-lg p-4">
            <FilmDetails filmdetails={data[currentIndex]} />
          </div>
        </div>
      )}
    </div>
  );
}
