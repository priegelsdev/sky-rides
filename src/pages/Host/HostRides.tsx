import { Suspense } from 'react';
import { Link, defer, Await, useLoaderData } from 'react-router-dom';

import { getHostRides } from '../../../api';

interface Ride {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  hostId: string;
}

interface LoaderData {
  rides: Ride[];
}

// loader function to fetch data
export function loader() {
  return defer({ rides: getHostRides() });
}

export default function HostRides() {
  const dataPromise = useLoaderData() as LoaderData;

  function renderHostRideEls(rides: Ride[]) {
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

    return <div className="flex flex-col gap-6">{rideElements}</div>;
  }

  /*   // conditional error render
  if (error) {
    return (
      <h1 className="text-3xl font-bold text-white">
        There was an error: {error.message}
      </h1>
    );
  } */

  // successful render
  return (
    <div className="pb-6">
      <h1 className="text-3xl font-bold text-accent mb-7">Your listed rides</h1>
      <Suspense fallback={<h2>Loading..</h2>}>
        <Await resolve={dataPromise.rides}>{renderHostRideEls}</Await>
      </Suspense>
    </div>
  );
}
