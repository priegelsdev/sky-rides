import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-center md:text-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link
        to="/"
        className="md:self-center bg-secondary text-gray-900 font-bold text-center rounded-md px-6 py-2"
      >
        Return to home
      </Link>
    </div>
  );
}
