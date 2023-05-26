import React, { useState, useEffect } from 'react';

// 📌 Build a component that fetches data from an API and displays it on the screen.
// Use the useEffect hook to make the API request when the component mounts.
// Display a loading message while the data is being fetched
// and show the fetched data once it's available.

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 📌 Perform API request and retrieve data
        // 📌 Set the retrieved data using setData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div>{/* 📌 Display Data fetched from API here */}</div>;
}

export default DataFetcher;
