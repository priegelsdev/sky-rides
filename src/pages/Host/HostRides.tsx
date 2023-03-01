import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getHostRides } from '../../../api';

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
  // loading state
  const [loading, setLoading] = useState<boolean>(false);
  // error state
  const [error, setError] = useState<any>(null);

  // hook that fetches api data on page load
  useEffect(() => {
    async function loadHostRides() {
      setLoading(true);
      try {
        const data = await getHostRides();
        setRides(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadHostRides();
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

  // conditional loading render
  if (loading) {
    return <h1 className="text-3xl font-bold text-white">Loading...</h1>;
  }

  // conditional error render
  if (error) {
    return (
      <h1 className="text-3xl font-bold text-white">
        There was an error: {error.message}
      </h1>
    );
  }

  // successful render
  return (
    <div className="pb-6">
      <h1 className="text-3xl font-bold text-accent mb-7">Your listed rides</h1>
      <div className="flex flex-col gap-6">{rideElements}</div>
    </div>
  );
}
