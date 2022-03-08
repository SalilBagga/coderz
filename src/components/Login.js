import React, { useState, useContext } from 'react';
import { ReactComponent as Logo } from '../assets/Logo.svg';

import { UserContext } from '../context/UserContext';
export default function Login() {
  const context = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    let tempusername = username.trim();
    let temppassword = password.trim();
    let regex = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}/g;

    if (temppassword.match(regex) && tempusername) {
      context.setUser(tempusername);
    } else {
      alert('Enter valid username and password');
    }
  };
  return (
    <div className="w-[100vw] md:w-[40vw] h-[50vh] border-2 border-booking-grey mx-auto my-auto bg-booking-grey rounded-lg flex flex-col items-center">
      <div className="mt-6">
        <Logo />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="username" className="text-md text-white">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="rounded-md mt-2"
        />
        <label htmlFor="password" className="text-md text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="rounded-md mt-2"
        />
      </div>
      <button
        className="px-2 py-1 border-1 text-white border-white rounded-md mt-4 hover:text-booking-grey hover:bg-white text-md"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
