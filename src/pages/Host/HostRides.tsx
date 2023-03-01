import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Ride {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  hostId: string;
}

export default function HostRides() {
  // state that holds data fetched from server
  const [rides, setRides] = useState<Ride[]>([]);

  // hook that fetches api data on page load
  useEffect(() => {
    fetch('/api/host/rides')
      .then((res) => res.json())
      .then((data) => setRides(data.rides));
  }, []);

  const rideElements = rides.map((ride) => (
    <Link to={`${ride.id}`}>
      <div className="flex gap-5 items-center bg-secondary text-gray-800 p-5 rounded-sm">
        <img
          className="aspect-square max-h-28 rounded-md"
          src={ride.imageUrl}
        />
        <div>
          <h1 className="font-semibold text-xl md:text-2xl mb-1">
            {ride.name}
          </h1>
          <p className="text-md md:text-lg">
            <span className="text-lg md:text-xl">${ride.price}</span>/day
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="pb-6">
      <h1 className="text-3xl font-bold text-accent mb-7">Your listed rides</h1>
      <div className="flex flex-col gap-6">{rideElements}</div>
    </div>
  );
}
