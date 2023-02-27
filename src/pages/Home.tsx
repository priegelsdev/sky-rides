import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen">
      {/* change height once page fills up*/}
      <main className="h-full px-6 bg-hero bg-cover bg-center font-inter flex flex-col">
        <h1 className="text-center text-[3rem] font-extrabold py-10 leading-snug drop-shadow-xl">
          Fly <span className="text-primary drop-shadow-sm">high</span>, ride{' '}
          <span className="text-primary drop-shadow-sm">easy</span> <br /> with{' '}
          <span className="drop-shadow-[2px_2px_3px_rgba(0,0,0,0.53)] text-accent decoration-primary">
            SkyRides
          </span>
        </h1>
        <p className="drop-shadow-sm text-xl text-gray-800 font-medium md:text-center bg-gray-200 bg-opacity-40 rounded-xl p-3">
          Soar to new heights with SkyRides. Choose from our fleet of
          comfortable and reliable rides to make your journey a breeze. <br />
          Whether you're planning a weekend getaway or a cross-country
          adventure, SkyRides has got you covered.
        </p>
        <Link
          to="/rides"
          className="py-3 px-14 mx-auto my-10 bg-primary text-gray-200 text-lg font-semibold rounded-md"
        >
          Find your ride
        </Link>
      </main>
    </div>
  );
}
