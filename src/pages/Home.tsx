import Header from '../Components/Header';
import Footer from '../Components/Footer';

import picture from '../img/hero-bg.jpg';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      {/* change height once page fills up*/}
      <main className="h-full px-6 bg-hero bg-cover bg-center font-inter flex flex-col">
        <h1 className="text-center text-3xl font-extrabold py-10 leading-snug">
          Fly high, ride easy <br /> with{' '}
          <span className="drop-shadow-[2px_2px_6px_rgba(0,0,0,0.53)] text-accent decoration-primary">
            FlyRides
          </span>
        </h1>
        <img src={picture} />
        <p className="drop-shadow-lg font-medium md:text-center">
          Soar to new heights with FlyRides. Choose from our fleet of
          comfortable and reliable rides to make your journey a breeze. <br />
          Whether you're planning a weekend getaway or a cross-country
          adventure, FlyRides has got you covered.
        </p>
        <Link
          to="/rides"
          className="py-2 px-10 mx-auto my-10 bg-primary text-gray-200 font-semibold rounded-md"
        >
          Find your ride
        </Link>
      </main>
      <Footer />
    </div>
  );
}
