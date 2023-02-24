import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <>
      <Header />
      {/* change height once page fills up*/}
      <div className="h-96 bg-primary">
        <h1 className="text-center font-bold">About</h1>
      </div>
      <Footer />
    </>
  );
}
