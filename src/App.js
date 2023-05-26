import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to React Exercises! 🚀
      </h1>
      <p className="text-xl mb-8">
        Let's level up your React skills! Choose an exercise below:
      </p>
      <div className="mx-auto flex justify-center mt-20">
        <div className="flex gap-10">
          <div className="text-left">
            <h1 className="text-slate-700 text-3xl mb-5">
              USE STATE- EXERCISES
            </h1>
            <div className="grid grid-cols-1 max-w-[300px] gap-6">
              <ExerciseLink to="/use-state/switch" title="Switch Exercise" />
              <ExerciseLink
                to="/use-state/cart"
                title="Shopping Cart Exercise"
              />
              <ExerciseLink to="/use-state/todo" title="Todo List Exercise" />
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-slate-700 text-3xl mb-5">
              USE EFFECT - EXERCISES
            </h1>
            <div className="grid grid-cols-1 max-w-[300px] gap-6">
              <ExerciseLink
                to="/use-effect/simple-counter"
                title="Simple Counter"
              />
              <ExerciseLink to="/use-effect/fetch-data" title="Fetch Data" />
              <ExerciseLink
                to="/use-effect/event-listener"
                title="Event Listener"
              />
              <ExerciseLink
                to="/use-effect/local-storage"
                title="Local Storage"
              />
              <ExerciseLink
                to="/use-effect/geo-location"
                title="Geo Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExerciseLink = ({ to, title }) => {
  return (
    <Link
      to={to}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex flex-col items-center"
    >
      <span className="text-lg">{title}</span>
    </Link>
  );
};

export default HomePage;
