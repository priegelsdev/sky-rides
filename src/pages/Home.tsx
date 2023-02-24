import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      {/* change height once page fills up*/}
      <div className="h-96 bg-primary">
        <h1 className="text-center font-bold">
          Fly high, ride easy with FlyRides
        </h1>
      </div>
      <Footer />
    </>
  );
}
