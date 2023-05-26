import React, { useState, useEffect } from 'react';

//  📌 Create a simple counter application using React.
// The counter should start at 0 and increment by 1 every second.
// Use the useEffect hook to set up a timer that updates the counter value.
// Display the counter value on the screen.

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default Counter;
