import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function Header() {
  function toggleNav() {
    document.getElementById('navbar')?.classList.toggle('hidden');
    document.getElementById('navbar')?.classList.toggle('mr-12');
    document.getElementById('navbar')?.classList.toggle('mt-10');
  }

  return (
    <header className="relative bg-primary flex justify-between text-white font-inter py-10 px-6 border-none">
      <Link
        to="/"
        className="text-2xl font-black drop-shadow-md mr-2 hover:underline"
      >
        #SKYRIDES
      </Link>
      <button
        onClick={toggleNav}
        id="navbar-btn"
        className="md:hidden absolute mt-1/2 right-6"
      >
        <FaBars size={30} />
      </button>
      <nav
        id="navbar"
        className="hidden md:flex flex flex-col items-end gap-3 font-medium mr-12 md:mr-0 md:flex-row"
      >
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-lg' : ''
          }
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-lg' : ''
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-lg' : ''
          }
          to="/rides"
        >
          Rides
        </NavLink>
        <NavLink to="/login">{userIcon}</NavLink>
      </nav>
    </header>
  );
}
