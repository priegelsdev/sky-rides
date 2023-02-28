import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/host">Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
