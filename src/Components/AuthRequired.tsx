import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedin');
  const location = useLocation();

  if (isLoggedIn != 'true') {
    return (
      <Navigate
        to="/login"
        // display message from state when page accessed without auth;
        // use from location, so user gets redirected after login
        state={{ message: 'Log in required.', from: location.pathname }}
        // prevent call to navigate from pushing new entry into history stack by using replace true
        // if user clicks back button, she/he won't see login page again
        replace={true}
      />
    );
  }
  return <Outlet />;
}
