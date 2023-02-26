import React, { useState, useEffect } from 'react';

interface Ride {
  name: string;
  imageUrl: string;
  price: number;
  type: string;
}

export default function Rides() {
  // state that holds data fetched from server
  const [rides, setRides] = useState<Ride[]>([]);

  // hook that fetches api data on page load
  useEffect(() => {
    fetch('/api/rides')
      .then((res) => res.json())
      .then((data) => setRides(data.rides));
  }, []);

  console.log(rides);

  const rideElements = rides.map((ride) => (
    <div>
      <img
        className="aspect-square max-h-[32rem] rounded-md"
        src={ride.imageUrl}
      />
      <h1 className="font-semibold my-3">{ride.name}</h1>
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
  ));

  return (
    <div className="bg-primary px-6 text-white">
      <h1 className="text-accent text-3xl font-semibold">
        Explore our ride options
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 py-8">
        {rideElements}
      </div>
    </div>
  );
}
