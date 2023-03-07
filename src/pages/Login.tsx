import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  useLocation,
  useActionData,
  useNavigate,
  useNavigation,
  Form,
} from 'react-router-dom';
import { logInUser } from '../../api';

// type declaration for data coming back from action data
interface LoginResponse {
  token?: string;
  error?: string;
}

// action function to utilize React Router FormData & handle Form submit
// TODO: any type not ideal for request object and for error..
export async function action({ request }: any) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const data = await logInUser({ email, password });
    localStorage.setItem('loggedin', 'true');
    return data;
  } catch (err: any) {
    return { error: err.message };
  }
}

export default function Login() {
  // use location state for when user gets rerouted automatically for when not logged in but trying to access protected route
  const location = useLocation();
  const from = location.state?.from || '/host';
  // bring in navigate hook
  const navigate = useNavigate();
  // bring in navigation hook
  const navigation = useNavigation();
  // define data as what comes back from action function
  const data = useActionData() as LoginResponse;
  console.log(data);
  console.log(navigation);

  if (data?.token) {
    navigate(from, { replace: true });
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
      {/* conditionally render out error message if error is thrown */}
      {data?.error && (
        <h3 className="text-lg font-mono text-red-500 font-bold text-center -mb-3">
          {data.error}
        </h3>
      )}
      <Form action="/login" method="post" className="flex flex-col">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="p-2.5 border-gray-500 border rounded-md rounded-b-none"
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2.5 border-gray-500 border border-t-0 rounded-md rounded-t-none"
        ></input>
        {/* disabled if btn is clicked and while form is submitting; changing text while submitting*/}
        <button
          disabled={navigation.state === 'submitting'}
          className="bg-accentTwo text-primary rounded-md mt-4 py-2"
        >
          {navigation.state === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
}