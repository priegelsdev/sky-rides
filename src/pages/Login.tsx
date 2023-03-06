import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logInUser } from '../../api';

// type declaration for login data
interface LoginData {
  email: string;
  password: string;
}

// type declaration for error
interface ErrorData {
  message: string;
  statusText: string;
  status: number;
}

export default function Login() {
  // defining login data state
  const [logInData, setLogInData] = useState<LoginData>({
    email: '',
    password: '',
  });
  // status state for button when form is submitting
  const [status, setStatus] = useState<string>('idle');
  // error state for when form throws an error
  const [error, setError] = useState<ErrorData | null>(null);

  // use location state for when user gets rerouted automatically for when not logged in but trying to access protected route
  const location = useLocation();
  const from = location.state?.from || '/';
  // bring in navigate hook
  const navigate = useNavigate();

  // function to handle submit and either log user in or throw error; set states here
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // preventing default form submit action
    e.preventDefault();
    // when button is clicked, form is submitting and button gets disabled
    setStatus('submitting');
    // initialize error state as null to reset potential errors
    setError(null);
    // calling login function; since returning a promise, chain to get info
    logInUser(logInData)
      .then((data) => {
        localStorage.setItem('loggedin', 'true');
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
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
      {/* conditionally render out error message if error is thrown */}
      {error && (
        <h3 className="text-lg font-mono text-red-500 font-bold text-center -mb-3">
          {error.message}
        </h3>
      )}
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
        {/* disabled if btn is clicked and while form is submitting; changing text while submitting*/}
        <button
          disabled={status === 'submitting'}
          className="bg-accentTwo text-primary rounded-md mt-4 py-2"
        >
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
}
