import React, { useState, useEffect } from 'react';

// 📌 Build a component that saves and retrieves data from the local storage.
// Use the useState and useEffect hooks together to manage the data.
// When the component mounts, retrieve the data from the local storage and display it.
// Allow the user to update the data and save it back to the local storage.

function LocalStorageExample() {
  const [data, setData] = useState('');

  useEffect(() => {
    //   📌  On the first  load get the data from Localstorage
    //  and set the data in the state
  }, []);

  const handleChange = (e) => {
    // 📌 Set the state when the user types
  };

  //  ⚠️ 📌 Please don't forget to update the LOCAL STORAGE with the value user has typed

  return (
    <div>
      <input type="text" value={data} onChange={handleChange} />
      <p>Data stored in local storage: {data}</p>
    </div>
  );
}

export default LocalStorageExample;
