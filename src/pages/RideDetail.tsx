import React, { useState, useEffect } from 'react';
import { json, useParams } from 'react-router-dom';

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

  // initialize ride state as null to avoid errors when rendering unfetched state
  const [ride, setRide] = useState<Ride | null>(null);

  useEffect(() => {
    fetch(`/api/rides/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRide(data.rides));
  }, [params.id]);

  console.log(ride);

  return (
    <div className="bg-primary text-white px-6">
      {ride ? (
        <div className="lg:flex lg:flex-col lg:max-w-[32rem] lg:m-auto">
          <img
            className="aspect-square max-h-[32rem] rounded-md mb-12"
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
          <p className="mb-4 lg:max-w-[32rem] ">{ride.description}</p>
          <button className="w-full bg-accentTwo rounded-md text-lg font-semibold py-2 mb-6 lg:max-w-[32rem]">
            Rent this ride
          </button>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
