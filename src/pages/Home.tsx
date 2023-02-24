import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      {/* change height once page fills up*/}
      <main className="h-screen bg-hero bg-cover bg-center font-inter flex flex-col">
        <h1 className="text-center text-3xl font-extrabold py-10 leading-snug">
          Fly high, ride easy <br /> with{' '}
          <span className="underline drop-shadow-2xl text-gray-200 decoration-black">
            FlyRides
          </span>
        </h1>
        <p className="px-12 drop-shadow-lg">
          Soar to new heights with FlyRides. Choose from our fleet of
          comfortable and reliable rides to make your journey a breeze. Whether
          you're planning a weekend getaway or a cross-country adventure,
          FlyRides has got you covered.
        </p>
        <button className="py-1 px-10 mx-auto my-10 bg-secondary text-white font-bold rounded-md">
          Find your ride
        </button>
      </main>
      <Footer />
    </>
  );
}
