import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={ <Root /> }
    >
      <Route
        index={true}
        element={ <Home /> }
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
