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
      <div className="flex gap-7 items-center bg-secondary text-gray-800 py-6 px-8 rounded-sm">
        <img
          className="aspect-square max-h-32 rounded-md"
          src={ride.imageUrl}
        />
        <div>
          <h1 className="font-semibold my-3 text-2xl">{ride.name}</h1>
          <p className="mb-3 text-lg">
            <span className="text-xl">${ride.price}</span>/day
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <h1 className="text-3xl font-bold text-accent mb-7">Your listed rides</h1>
      <div className="flex flex-col gap-6">{rideElements}</div>
    </div>
  );
}
