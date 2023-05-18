import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to React Exercises! 🚀
      </h1>
      <p className="text-xl mb-8">
        Let's level up your React skills! Choose an exercise below:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li>
          <Link
            to="/use-state/switch"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex flex-col items-center"
          >
            <span className="text-lg">Switch Exercise</span>
          </Link>
        </li>
        <li>
          <Link
            to="/use-state/cart"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex flex-col items-center"
          >
            <span className="text-lg">Shopping Cart Exercise</span>
          </Link>
        </li>
        <li>
          <Link
            to="/use-state/todo"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex flex-col items-center"
          >
            <span className="text-lg">Todo List Exercise</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
