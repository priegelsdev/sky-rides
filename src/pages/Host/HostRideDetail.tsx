import React, { useState, useEffect } from 'react';
import {
  json,
  Link,
  NavLink,
  useParams,
  Outlet,
  useOutletContext,
} from 'react-router-dom';

const backArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 mt-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg>
);

// define Ride type that gets fetched from our server
interface Ride {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  type: string;
}

// define outlet context type
type ContextType = {
  ride: Ride;
};

export default function HostRideDetail() {
  // get route params
  const params = useParams();

  // initialize ride state as null to avoid errors when rendering unfetched state
  const [ride, setRide] = useState<Ride | null>(null);
  console.log(ride);

  useEffect(() => {
    fetch(`/api/host/rides/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRide(data.rides[0]));
  }, [params.id]);

  return (
    <div>
      <Link
        to=".."
        relative="path"
        className="flex gap-2 underline underline-offset-2 mb-8"
      >
        {backArrow} Back to all rides
      </Link>
      {ride ? (
        <div className="bg-secondary text-gray-800 p-5 rounded-sm mb-6">
          <div className="flex gap-4">
            <img
              className="aspect-square max-h-52 rounded-md"
              src={ride.imageUrl}
            />
            <div className="flex flex-col items-start justify-center">
              <span
                className={`text-xs md:text-sm rounded-md py-1 px-4 ${
                  ride.type === 'rugged'
                    ? 'bg-accent'
                    : ride.type === 'luxury'
                    ? 'bg-accentTwo'
                    : 'bg-secondary border border-gray-600'
                }
            lg:max-w-[6.2rem] 
            `}
              >
                {ride.type}
              </span>
              <h1 className="text-xl md:text-2xl font-bold mt-3">
                {ride.name}
              </h1>
              <p>
                <span className="md:text-lg font-bold">${ride.price}</span>
                /day
              </p>
            </div>
          </div>
          {/* NAVBAR for host ride detail */}
          <nav className="flex gap-3 my-4">
            <NavLink
              end
              to="."
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-1 font-bold'
                  : 'hover:font-bold hover:underline underline-offset-1'
              }
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-1 font-bold'
                  : 'hover:font-bold hover:underline underline-offset-1'
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-1 font-bold'
                  : 'hover:font-bold hover:underline underline-offset-1'
              }
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ ride }} />
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

// export custom hook for nested components
export function useRide() {
  return useOutletContext<ContextType>();
}
