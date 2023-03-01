export async function getRides() {
  const res = await fetch('/api/rides');
  const data = await res.json();
  return data.rides;
}

export async function getHostRides() {
  const res = await fetch('/api/host/rides');
  const data = await res.json();
  return data.rides;
}
