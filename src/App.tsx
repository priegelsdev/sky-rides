import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Rides from './pages/Rides/Rides';

//layout
import Layout from './Components/Layout';

import '../server';
import RideDetail from './pages/Rides/RideDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:id" element={<RideDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
