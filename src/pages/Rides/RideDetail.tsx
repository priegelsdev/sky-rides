import React, { useState, useEffect } from 'react';
import { json, Link, useParams, useLocation } from 'react-router-dom';

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

export default function RideDetail() {
  // get route params
  const params = useParams();

  // get location to go back to filtered page if filter was active
  const location = useLocation();

  // switch statement to determine text for back to rides button
  function filterOption() {
    switch (location.state.search) {
      case 'type=simple':
        return 'simple';
        break;
      case 'type=rugged':
        return 'rugged';
        break;
      case 'type=luxury':
        return 'luxury';
        break;
      default:
        return 'our';
    }
  }

  // initialize ride state as null to avoid errors when rendering unfetched state
  const [ride, setRide] = useState<Ride | null>(null);

  useEffect(() => {
    fetch(`/api/rides/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRide(data.rides));
  }, [params.id]);

  return (
    <div className="text-white px-6">
      {ride ? (
        <div className="lg:flex lg:flex-col lg:max-w-[40rem] lg:m-auto">
          <Link
            relative="path"
            to={location ? `../?${location.state.search}` : '..'}
            className="flex gap-2 ml-4 underline underline-offset-2"
          >
            {backArrow} Back to {filterOption()} rides
          </Link>
          <img
            className="aspect-square max-h-[32rem] lg:max-h-[40rem] lg:h-[40rem] lg:min-w-[40rem] rounded-md mt-6 mb-12"
            src={ride.imageUrl}
          />
          <span
            className={`rounded-md py-1 px-6 text-gray-800 ${
              ride.type === 'rugged'
                ? 'bg-accent'
                : ride.type === 'luxury'
                ? 'bg-accentTwo'
                : 'bg-secondary'
            }
            lg:max-w-[6.2rem] 
            `}
          >
            {ride.type}
          </span>
          <h1 className="text-3xl font-bold my-6">{ride.name}</h1>
          <p className="mb-4 text-xl">
            <span className="text-2xl font-bold">${ride.price}</span>/day
          </p>
          <p className="mb-4 lg:max-w-[40rem] ">{ride.description}</p>
          <button className="w-full bg-accentTwo text-gray-800 rounded-md text-lg font-semibold py-2 mb-6 lg:max-w-[40rem]">
            Rent this ride
          </button>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
