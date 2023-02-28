import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="px-6 text-gray-200">
      <nav className="flex gap-3 mb-3">
        <NavLink
          end
          to="/host"
          className={({ isActive }) =>
            isActive
              ? 'underline underline-offset-1 font-bold text-white'
              : 'hover:font-bold hover:underline underline-offset-1'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive
              ? 'underline underline-offset-1 font-bold text-white'
              : 'hover:font-bold hover:underline underline-offset-1'
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive
              ? 'underline underline-offset-1 font-bold text-white'
              : 'hover:font-bold hover:underline underline-offset-1'
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
