import { useRide } from './HostRideDetail';

export default function HostRideInfo() {
  const { ride } = useRide();

  return (
    <div className="flex flex-col gap-3">
      <p>
        <span className="font-semibold">Name:</span> {ride.name}
      </p>
      <p>
        <span className="font-semibold">Category:</span> {ride.type}
      </p>
      <p>
        <span className="font-semibold">Description:</span> {ride.description}
      </p>
      <p>
        <span className="font-semibold">Visibility:</span> Public
      </p>
    </div>
  );
}
