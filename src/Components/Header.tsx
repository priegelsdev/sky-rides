import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  function toggleNav() {
    document.getElementById('navbar')?.classList.toggle('hidden');
  }

  return (
    <header className="relative bg-primary flex justify-between items-center text-white font-inter py-10 px-6">
      <h1 className="text-2xl font-black drop-shadow-md mr-2">#SKYRIDES</h1>
      <button
        onClick={toggleNav}
        id="navbar-btn"
        className="md:hidden absolute mt-1/2 right-5"
      >
        <FaBars size={30} />
      </button>
      <nav
        id="navbar"
        className="hidden md:flex flex flex-col gap-3 text-lg font-medium mr-12 md:mr-0 md:flex-row"
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/rides">Rides</NavLink>
        {/* <NavLink to="">Profile</NavLink> */}
      </nav>
    </header>
  );
}
