import React, { useEffect } from 'react';

export default function Rides() {
  useEffect(() => {
    fetch('/api/rides')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Pimp my ride</h1>
    </div>
  );
}
