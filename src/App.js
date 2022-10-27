import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Banner from './pages/Banner/Banner';
import Courses from './pages/Coursers/Courses';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:"/courses",
        loader:async()=>{
         return fetch("http://localhost:5000/courses")
        },
        element:<Courses></Courses>
      }
    ]
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