import React, { useContext } from 'react';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { UserContext } from '../context/UserContext';
export default function Header() {
  const context = useContext(UserContext);
  return (
    <div className="w-full h-16 mb-4 bg-booking-grey flex justify-around items-center">
      <div>
        <Logo />
      </div>
      {!context.user && (
        <div>
          <h1 className="text-md mr-2 text-white">Login to book</h1>
        </div>
      )}
      {context.user && (
        <div className="flex text-white items-center">
          <h1 className="text-md mr-2">Hi,{context.user}</h1>
          <button
            className="px-2 py-1 border-1 text-white border-white rounded-md"
            onClick={() => {
              context.setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
