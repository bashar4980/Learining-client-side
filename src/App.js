import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Banner from './pages/Banner/Banner';
import Checkout from './pages/Checkout/Checkout';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Courses from './pages/Coursers/Courses';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Signin from './pages/SignUp/Signin';
import SignUp from './pages/SignUp/SignUp';


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
      },
      {
        path:"/courses/:id",
        loader:async({params})=>{
           return fetch(`http://localhost:5000/courses/${params.id}`)
        },
        element:<CourseDetails></CourseDetails>
      },
      {
        path:"/checkout/:id",
        loader:async({params})=>{
          return fetch(`http://localhost:5000/courses/${params.id}`)
       },
        element:<PrivateRoute><Checkout/></PrivateRoute>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/signin",
        element:<Signin></Signin>
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