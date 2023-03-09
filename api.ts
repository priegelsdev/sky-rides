// function to fetch rides for Rides page
export async function getRides(id?: number) {
  // optional id to make function accessible to detail page
  const url = id ? `/api/rides/${id}` : '/api/rides';
  const res = await fetch(url);

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

// function to fetch rides for HostRides page
export async function getHostRides(id?: number) {
  // optional id to make function accessible to detail page
  const url = id ? `/api/host/rides/${id}` : '/api/host/rides';
  const res = await fetch(url);

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

// function to login user
export async function logInUser(creds: object) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
