import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Rides, { loader as ridesLoader } from './pages/Rides/Rides';
import RideDetail from './pages/Rides/RideDetail';
import NotFound from './pages/NotFound';

import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostRides from './pages/Host/HostRides';
import HostRideDetail from './pages/Host/HostRideDetail';
import HostRideInfo from './pages/Host/HostRideInfo';
import HostRidePricing from './pages/Host/HostRidePricing';
import HostRidePhotos from './pages/Host/HostRidePhotos';

//layout
import Layout from './Components/Layout';
import HostLayout from './Components/HostLayout';

import '../server';

export default function App() {
  // define router variable to be used by RouterProvider in return statement
  // createBrowserRouter used to utilize loaders and improve app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rides" element={<Rides />} loader={ridesLoader} />
        <Route path="rides/:id" element={<RideDetail />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="rides" element={<HostRides />} />
          <Route path="rides/:id" element={<HostRideDetail />}>
            <Route index element={<HostRideInfo />} />
            <Route path="pricing" element={<HostRidePricing />} />
            <Route path="photos" element={<HostRidePhotos />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
