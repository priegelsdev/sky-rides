import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="px-6 text-gray-200">
      <nav className="flex gap-3 mb-8">
        <NavLink
          end
          to="."
          className={({ isActive }) =>
            isActive
              ? 'underline underline-offset-1 font-bold text-white'
              : 'hover:font-bold hover:underline underline-offset-1'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive
              ? 'underline underline-offset-1 font-bold text-white'
              : 'hover:font-bold hover:underline underline-offset-1'
          }
        >
          Income
        </NavLink>
        <NavLink
          to="rides"
          className={({ isActive }) =>
            isActive
              ? 'underline underline-offset-1 font-bold text-white'
              : 'hover:font-bold hover:underline underline-offset-1'
          }
        >
          Rides
        </NavLink>
        <NavLink
          to="reviews"
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
