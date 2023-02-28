import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-primary grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
