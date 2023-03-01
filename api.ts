export async function getRides() {
  const res = await fetch('/api/rides');

  // add res check
  if (!res.ok) {
    throw {
      message: 'Failed to fetch rides',
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.rides;
}

export async function getHostRides() {
  const res = await fetch('/api/host/rides');

  // add res check
  if (!res.ok) {
    throw {
      message: 'Failed to fetch rides',
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.rides;
}
