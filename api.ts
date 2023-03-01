export async function getRides() {
  const res = await fetch('/api/rides');
  const data = await res.json();
  return data.rides;
}
