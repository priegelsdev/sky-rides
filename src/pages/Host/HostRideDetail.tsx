import { Suspense } from 'react';
import {
  Link,
  NavLink,
  useLoaderData,
  Outlet,
  useOutletContext,
  defer,
  Await,
} from 'react-router-dom';
import { getHostRides } from '../../../api';

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

// define loader data for dataPromise
interface LoaderData {
  ride: Ride[];
}

// define params type
interface Params {
  id?: number;
}

// define the object with params coming back from loader
interface LoaderParams {
  params: Params;
}

// define outlet context type
type ContextType = {
  ride: Ride;
};

export function loader({ params }: LoaderParams) {
  const id = params.id;
  return defer({ ride: getHostRides(id) });
}

export default function HostRideDetail() {
  // loader data
  const dataPromise = useLoaderData() as LoaderData;
  console.log(dataPromise);

  return (
    <div>
      <Link
        to=".."
        relative="path"
        className="flex gap-2 underline underline-offset-2 mb-6"
      >
        {backArrow} Back to all rides
      </Link>
      <Suspense fallback={<h2>loading..</h2>}>
        <Await resolve={dataPromise.ride}>
          {(rideArr) => {
            const ride: Ride = rideArr[0];
            return (
              <div className="bg-secondary text-gray-800 p-5 rounded-sm mb-6">
                <div className="flex gap-4">
                  <img
                    className="aspect-square max-h-52 rounded-md"
                    src={ride.imageUrl}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <span
                      className={`text-xs md:text-sm rounded-md py-1 px-4 ${
                        ride.type === 'rugged'
                          ? 'bg-accent'
                          : ride.type === 'luxury'
                          ? 'bg-accentTwo'
                          : 'bg-secondary border border-gray-600'
                      } lg:max-w-[6.2rem]`}
                    >
                      {ride.type}
                    </span>
                    <h1 className="text-xl md:text-2xl font-bold mt-3">
                      {ride.name}
                    </h1>
                    <p>
                      <span className="md:text-lg font-bold">
                        ${ride.price}
                      </span>
                      /day
                    </p>
                  </div>
                </div>
                {/* NAVBAR for host ride detail */}
                <nav className="flex gap-3 my-4">
                  <NavLink
                    end
                    to="."
                    className={({ isActive }) =>
                      isActive
                        ? 'underline underline-offset-1 font-bold'
                        : 'hover:font-bold hover:underline underline-offset-1'
                    }
                  >
                    Details
                  </NavLink>
                  <NavLink
                    to="pricing"
                    className={({ isActive }) =>
                      isActive
                        ? 'underline underline-offset-1 font-bold'
                        : 'hover:font-bold hover:underline underline-offset-1'
                    }
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    to="photos"
                    className={({ isActive }) =>
                      isActive
                        ? 'underline underline-offset-1 font-bold'
                        : 'hover:font-bold hover:underline underline-offset-1'
                    }
                  >
                    Photos
                  </NavLink>
                </nav>
                <Outlet context={{ ride }} />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

// export custom hook for nested components
export function useRide() {
  return useOutletContext<ContextType>();
}
