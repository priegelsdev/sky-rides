import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      {/* change height once page fills up*/}
      <main className="h-screen bg-hero bg-cover bg-center">
        <h1 className="text-center font-bold">
          Fly high, ride easy with FlyRides
        </h1>
      </main>
      <Footer />
    </>
  );
}
