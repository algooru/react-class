import React, { useState, useEffect } from 'react';

function EventListener() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default EventListener;
