import React, { useState, useEffect } from 'react';

export default function Rides() {
  // state that holds data fetched from server
  const [rides, setRides] = useState([]);

  // hook that fetches api data on page load
  useEffect(() => {
    fetch('/api/rides')
      .then((res) => res.json())
      .then((data) => setRides(data.rides));
  }, []);

  console.log(rides);

  const rideElements = rides.map((ride) => (
    <div>
      <img className="aspect-square w-60 rounded-md" src={ride.imageUrl} />
      <h1 className="font-semibold my-3">{ride.name}</h1>
      <p className="mb-2">${ride.price}/day</p>
      <span
        className={`rounded-md py-1 px-6 text-gray-800 ${
          ride.type === 'rugged' ? 'bg-accent' : 'bg-secondary'
        } 
        ${ride.type === 'luxury' ? 'bg-accentTwo' : ''}`}
      >
        {ride.type}
      </span>
    </div>
  ));

  return (
    <div className="bg-primary px-6 text-white">
      <h1 className="text-accent text-3xl font-semibold">Explore our rides</h1>
      <div className="flex flex-wrap gap-10 py-8">{rideElements}</div>
    </div>
  );
}
