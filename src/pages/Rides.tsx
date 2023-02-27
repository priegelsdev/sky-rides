import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// define Ride type that gets fetched from our server
interface Ride {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
}

export default function Rides() {
  // state that holds data fetched from server
  const [rides, setRides] = useState<Ride[]>([]);
  // search params for filtering through rides
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  // hook that fetches api data on page load
  useEffect(() => {
    fetch('/api/rides')
      .then((res) => res.json())
      .then((data) => setRides(data.rides));
  }, []);

  const displayedRides = typeFilter ? rides.filter(ride => ride.type === typeFilter) : rides

  const rideElements = displayedRides.map((ride) => (
    <Link to={`/rides/${ride.id}`}>
      <div>
        <img
          className="aspect-square max-h-[32rem] rounded-md"
          src={ride.imageUrl}
        />
        <h1 className="font-semibold my-3 text-lg">{ride.name}</h1>
        <p className="mb-3">${ride.price}/day</p>
        <span
          className={`rounded-md py-1 px-6 text-gray-800 ${
            ride.type === 'rugged'
              ? 'bg-accent'
              : ride.type === 'luxury'
              ? 'bg-accentTwo'
              : 'bg-secondary'
          }`}
        >
          {ride.type}
        </span>
      </div>
    </Link>
  ));

  return (
    <div className="bg-primary px-6 text-white">
      <h1 className="text-accent text-3xl font-semibold">
        Explore our ride options
      </h1>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className={`${typeFilter === 'simple' ? 'bg-secondary text-gray-800' : 'bg-primaryLight'} py-1 px-4 rounded-md hover:bg-secondary hover:text-gray-800`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className={`${typeFilter === 'luxury' ? 'bg-accentTwo text-gray-800' : 'bg-primaryLight'} py-1 px-4 rounded-md hover:bg-accentTwo hover:text-gray-800`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className={`${typeFilter === 'rugged' ? 'bg-accent text-gray-800' : 'bg-primaryLight'} py-1 px-4 rounded-md hover:bg-accent hover:text-gray-800`}
        >
          Rugged
        </button>
        {typeFilter && <button
          onClick={() => setSearchParams({})}
          className="text-gray-300 underline underline-offset-1"
        >
          Clear filter
        </button>}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 py-8">
        {rideElements}
      </div>
    </div>
  );
}