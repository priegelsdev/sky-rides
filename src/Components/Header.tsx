import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  function toggleNav() {
    document.getElementById('navbar')?.classList.toggle('hidden');
    document.getElementById('navbar')?.classList.toggle('mr-12');
    document.getElementById('navbar')?.classList.toggle('mt-10');
  }

  return (
    <header className="relative bg-primary flex justify-between text-white font-inter py-10 px-6">
      <Link to="/" className="text-2xl font-black drop-shadow-md mr-2">
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
        className="hidden md:flex flex flex-col gap-3 text-lg font-medium mr-12 md:mr-0 md:flex-row"
      >
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/rides">Rides</NavLink>
        {/* <NavLink to="">Profile</NavLink> */}
      </nav>
    </header>
  );
}
