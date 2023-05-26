import React, { useState, useEffect } from 'react';

// 📌 Create a component that retrieves the user's geolocation using the browser's Geolocation API.
// Use the useEffect hook to request the user's location when the component mounts
// and display the latitude and longitude on the screen.
// display a loading text when it is being fetch.
// Handle any 🔴 errors that may occur during the geolocation retrieval.

function GeolocationExample() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 🥝 👉🏼 navigator.geolocation is the global object to get user location.

    if (navigator.geolocation) {
      // 📌 Get the Location details and update state here  👇
    } else {
      // 📌 Handle error here if user does nont give permission 👇
    }
  }, []);

  return (
    <div>
      <p>Latitude: </p>
      <p>Longitude: </p>
    </div>
  );
}

export default GeolocationExample;
