import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logInUser } from '../../api';

export default function Login() {
  return (
    <div className="flex flex-col px-6 gap-6 md:w-[50%] lg:w-[40%] md:m-auto">
      <h1 className="text-3xl text-accent font-bold text-center">
        Sign in to your account
      </h1>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email address"
          className="p-2.5 border-gray-500 border rounded-md rounded-b-none"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2.5 border-gray-500 border border-t-0 rounded-md rounded-t-none"
        ></input>
        <button className="bg-accentTwo text-primary rounded-md mt-4 py-2">
          Log in
        </button>
      </form>
    </div>
  );
}
