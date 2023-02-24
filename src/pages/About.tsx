import Header from '../Components/Header';
import Footer from '../Components/Footer';

import aboutImg from '../assets/images/about.jpg';

export default function About() {
  return (
    <>
      <Header />
      {/* change height once page fills up*/}
      <div className="h-screen bg-primary font-inter flex flex-col">
        <img className="max-h-52 object-cover object-bottom" src={aboutImg} />
        <h1 className="px-6 font-bold text-white text-2xl mt-8 mb-4">
          The sky's the limit
        </h1>
        <p className="px-6 text-gray-200">
          Our mission is to enliven your trip with the perfect travel ride. Our
          vehicles are recertified before each trip to ensure your travel plans
          let you experience the freedom of flight.
          <br />
          <br />
          Our team is full of flyride enthusiasts who know firsthand the magic
          of taking rides to new heights.
        </p>
        <div className="bg-secondary rounded-md mx-6 mt-12 px-7 py-6">
          <h3 className="text-lg font-bold leading-tight">
            Your destination is waiting. <br /> Your ride is ready.
          </h3>
          <button className="bg-gray-900 rounded-lg px-4 py-2 mt-4 text-white text-xs font-semibold">
            Explore our rides
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
