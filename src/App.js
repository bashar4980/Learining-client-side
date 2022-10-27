import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
};

export default App;