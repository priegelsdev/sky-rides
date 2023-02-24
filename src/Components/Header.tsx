import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-screen bg-secondary py-10 px-6 flex justify-between items-center text-white">
      <h1 className="text-2xl font-black ">#FLYRIDES</h1>
      <nav className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="">Rides</NavLink>
        <NavLink to="">Profile</NavLink>
      </nav>
    </header>
  );
}
