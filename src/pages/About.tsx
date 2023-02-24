import Header from '../Components/Header';
import Footer from '../Components/Footer';

import aboutImg from '../assets/images/about.jpg';

export default function About() {
  return (
    <>
      <Header />
      {/* change height once page fills up*/}
      <div className="h-screen bg-secondary font-inter flex flex-col">
        <img src={aboutImg} />
        <h1 className="text-center font-bold">About</h1>
      </div>
      <Footer />
    </>
  );
}