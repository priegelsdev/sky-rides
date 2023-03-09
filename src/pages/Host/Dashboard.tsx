import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Dashboard() {
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
          <h2 className="text-xl font-bold">Review score</h2>
          <BsStarFill className="text-[#FF8C38] text-2xl ml-4 mr-1" />
          <p>
            <span className="font-bold">5.0</span>/5
          </p>
        </div>
        <Link to="reviews">Details</Link>
      </div>
      <div className="flex justify-between items-center px-6 py-10">
        <h2 className="text-xl font-bold">Your listed rides</h2>
        <Link to="rides">View all</Link>
      </div>
    </div>
  );
}
