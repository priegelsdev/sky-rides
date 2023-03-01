import { useRide } from './HostRideDetail';

export default function HostRidePhotos() {
  const { ride } = useRide();

  return (
    <div>
      <img src={ride.imageUrl} className="max-h-32 rounded-md"></img>
    </div>
  );
}
