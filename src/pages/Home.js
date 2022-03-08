import React, { useContext } from 'react';

//components
import Login from '../components/Login';
import Header from '../components/Header';
import Booking from '../components/Booking';

import { UserContext } from '../context/UserContext';

export default function Home() {
  const context = useContext(UserContext);
  return (
    <div>
      <Header />
      {!context.user && <Login />}
      {context.user && <Booking />}
    </div>
  );
}
