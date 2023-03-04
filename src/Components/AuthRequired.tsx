import { Outlet, Navigate } from 'react-router-dom';

export default function AuthRequired() {
  // TODO: testing auth with token
  const auth = { token: 1 };

  if (!auth.token) {
    return <Navigate to="/login" state={{ message: 'Log in required.' }} />;
  }
  return <Outlet />;
}
