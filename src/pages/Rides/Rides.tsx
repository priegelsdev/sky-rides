import { useState, Suspense } from 'react';
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom';

import { getRides } from '../../../api';

// define Ride type that gets fetched from our server
interface Ride {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
}

// define loader data type
interface LoaderData {
  rides: Ride[];
}

// loader data
export function loader() {
  return defer({ rides: getRides() });
}

export default function Rides() {
  // search params for filtering through rides
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  // loading state
  const [loading, setLoading] = useState<boolean>(false);
  // error state
  const [error, setError] = useState<any>(null);

  // utilize loader data instead of use effect hook to fetch data
  // use type assertion to prevent 'unknown' error
  /* const rides: Ride[] = useLoaderData() as Ride[]; */
  const dataPromise = useLoaderData() as LoaderData;

  // function to render elements in await component
  function renderRideElements(rides: Ride[]) {
    const displayedRides = typeFilter
      ? rides.filter((ride: Ride) => ride.type === typeFilter)
      : rides;

    const rideElements = displayedRides.map((ride: Ride) => (
      <Link to={`${ride.id}`} state={{ search: searchParams.toString() }}>
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
      <>
        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={() => setSearchParams({ type: 'simple' })}
            className={`${
              typeFilter === 'simple'
                ? 'bg-secondary text-gray-800'
                : 'bg-primaryLight'
            } py-1 px-4 rounded-md hover:bg-secondary hover:text-gray-800`}
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: 'luxury' })}
            className={`${
              typeFilter === 'luxury'
                ? 'bg-accentTwo text-gray-800'
                : 'bg-primaryLight'
            } py-1 px-4 rounded-md hover:bg-accentTwo hover:text-gray-800`}
          >
            Luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: 'rugged' })}
            className={`${
              typeFilter === 'rugged'
                ? 'bg-accent text-gray-800'
                : 'bg-primaryLight'
            } py-1 px-4 rounded-md hover:bg-accent hover:text-gray-800`}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="text-gray-300 underline underline-offset-1"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 py-8">
          {rideElements}
        </div>
      </>
    );
  }

  // error condition
  if (error) {
    return (
      <h1 className="text-2xl font-bold text-white p-6">
        There was an error: {error.message}
      </h1>
    );
  }

  // successful render
  return (
    <div className="px-6 text-white">
      <h1 className="text-accent text-3xl font-semibold">
        Explore our ride options
      </h1>
      {/* Wrapping Await component in Suspense so while ride elements are loading user sees loading text */}
      <Suspense
        fallback={<h2 className="text-3xl font-bold mt-5">Loading...</h2>}
      >
        <Await resolve={dataPromise.rides}>{renderRideElements}</Await>
      </Suspense>
    </div>
  );
}
