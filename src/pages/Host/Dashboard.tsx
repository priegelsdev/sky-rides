import { BsStarFill } from 'react-icons/bs';
import { Suspense } from 'react';
import { Link, Await, defer, useLoaderData } from 'react-router-dom';
import { getHostRides } from '../../../api';

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
  id: number;
}

// define the object with params coming back from loader
interface LoaderParams {
  params: Params;
}

export function loader({ params }: LoaderParams) {
  const id = params.id;
  return defer({ ride: getHostRides(id) });
}

export default function Dashboard() {
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

  return (
    <div className="-mx-6">
      <div className="flex justify-between items-center bg-accent text-gray-800 px-6 py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <h5>
            Income last <span className="font-bold underline">30 days</span>
          </h5>
          <h2 className="text-4xl font-bold">$3,840</h2>
        </div>
        <Link to="income">Details</Link>
      </div>
      <div className="flex justify-between items-center bg-[#dac68c] text-gray-800 px-6 py-10">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">Review score</h2>
          <BsStarFill className="text-[#FF8C38] text-2xl ml-4 mr-1" />
          <p>
            <span className="font-bold">5.0</span>/5
          </p>
        </div>
        <Link to="reviews">Details</Link>
      </div>
      <div className="px-6 py-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your listed rides</h2>
          <Link to="rides">View all</Link>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Await resolve={dataPromise.ride}>{renderHostRideEls}</Await>
        </Suspense>
      </div>
    </div>
  );
}
