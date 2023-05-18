import React, { useState } from 'react';

const Switch = () => {
  // TODO: Declare a state variable to manage the toggle state

  // TODO: Define a function to handle the toggle

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Switch Exercise</h1>

      {/* TODO: Change the color of the button to red if its turned off and greeen if its turned on */}
      <button className="p-4 rounded bg-red-300 color-white ">
        {/* TODO: Display the text of the button based on the toggle state ie: ON / OFF */}
        ON
      </button>
    </div>
  );
};

export default Switch;
