import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Rides from './pages/Rides/Rides';
import RideDetail from './pages/Rides/RideDetail';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import Dashboard from './pages/Host/Dashboard';

//layout
import Layout from './Components/Layout';
import HostLayout from './Components/HostLayout';

import '../server';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:id" element={<RideDetail />} />

          <Route element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
