import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Switch from './use-state/switch';
import Cart from './use-state/cart';
import Todo from './use-state/todo';
import EventListener from './use-effect/event-listener';
import Counter from './use-effect/simple-counter';
import DataFetcher from './use-effect/fetch-data';
import LocalStorage from './use-effect/local-storage';
import GeoLocation from './use-effect/geo-location';

import ResultEventListener from './results/event-listener';
import ResultLocalStorage from './results/local-storage';
import ResultGeoLocation from './results/geo-location';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/use-state',
    children: [
      { path: 'switch', element: <Switch /> },
      { path: 'cart', element: <Cart /> },
      { path: 'todo', element: <Todo /> },
    ],
  },

  {
    path: '/use-effect',
    children: [
      { path: 'simple-counter', element: <Counter /> },
      { path: 'event-listener', element: <EventListener /> },
      { path: 'fetch-data', element: <DataFetcher /> },
      { path: 'local-storage', element: <LocalStorage /> },
      { path: 'geo-location', element: <GeoLocation /> },
    ],
  },

  {
    path: '/results',
    children: [
      { path: 'event-listener', element: <ResultEventListener /> },
      { path: 'local-storage', element: <ResultLocalStorage /> },
      { path: 'geo-location', element: <ResultGeoLocation /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
