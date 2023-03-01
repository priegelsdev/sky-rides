import { useRide } from './HostRideDetail';

export default function HostRidePricing() {
  const { ride } = useRide();

  return (
    <div>
      <p className="text-lg">
        <span className="text-xl font-semibold">${ride.price}</span>/day
      </p>
    </div>
  );
}
