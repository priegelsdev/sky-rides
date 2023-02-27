import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { Link } from 'react-router-dom';

import aboutImg from '../img/about.jpg';

export default function About() {
  return (
    <>
      {/* change height once page fills up*/}
      <div className="bg-primary font-inter flex flex-col">
        <img className="max-h-72 object-cover object-bottom" src={aboutImg} />
        <h1 className="font-bold text-accent text-2xl px-6 mt-8 mb-4">
          The sky's the limit
        </h1>
        <p className="text-gray-200 px-6">
          Our mission is to enliven your trip with the perfect travel ride. Our
          vehicles are recertified before each trip to ensure your travel plans
          let you experience the freedom of flight.
          <br />
          <br />
          Our team is full of skyride enthusiasts who know firsthand the magic
          of taking rides to new heights.
        </p>
        <div className="bg-secondary rounded-md mx-6 mt-12 mb-10 px-7 py-6 pb-10">
          <h3 className="text-lg md:text-xl font-bold mb-5">
            Your destination is waiting. <br /> Your ride is ready.
          </h3>
          <Link
            to="/rides"
            className="bg-gray-900 hover:bg-accent hover:text-gray-900 rounded-lg text-white text-sm font-semibold px-4 py-2"
          >
            Explore our rides
          </Link>
        </div>
      </div>
    </>
  );
}
