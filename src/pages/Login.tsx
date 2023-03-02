import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logInUser } from '../../api';

interface LoginData {
  email: string;
  password: string;
}

export default function Login() {
  // defining login data state
  const [logInData, setLogInData] = useState<LoginData>({
    email: '',
    password: '',
  });

  // use location state for when user gets rerouted automatically for when not logged in but trying to access protected route
  const location = useLocation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // preventing default form submit action
    e.preventDefault();
    // calling login function; since returning a promise, chain to get info
    logInUser(logInData).then((data) => console.log(data));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogInData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col px-6 gap-6 md:w-[50%] lg:w-[40%] md:m-auto">
      {location.state?.message && (
        <h3 className="text-lg font-mono text-red-500 font-bold text-center -mb-3">
          {location.state.message}
        </h3>
      )}
      <h1 className="text-3xl text-accent font-bold text-center">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={logInData.email}
          className="p-2.5 border-gray-500 border rounded-md rounded-b-none"
        ></input>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={logInData.password}
          className="p-2.5 border-gray-500 border border-t-0 rounded-md rounded-t-none"
        ></input>
        <button className="bg-accentTwo text-primary rounded-md mt-4 py-2">
          Log in
        </button>
      </form>
    </div>
  );
}
