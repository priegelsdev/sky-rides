import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Rides from './pages/Rides';
import Header from './Components/Header';
import Footer from './Components/Footer';

import '../server';

// TODO: figure out app structure and where to actually put the routing; App.tsx probably correct, but not like this
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rides" element={<Rides />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
