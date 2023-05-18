import React, { useState } from 'react';

const ShoppingCartExercise = () => {
  const [cartItems, setCartItems] = useState([]);

  // TODO: 🛒 Implement the logic to add an item to the cart
  const OnAddItem = () => {};

  // TODO: ❌ Implement the logic to remove an item from the cart
  const onRemoveItem = () => {};

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart Exercise</h1>
      <div className="mb-4">
        <p>
          Total items in cart:{' '}
          {/* TODO: Display the total number of items in the cart */}
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={OnAddItem}
        >
          Add Item
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onRemoveItem}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartExercise;
