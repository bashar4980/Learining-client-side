import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import NotFound from './pages/404page.jsx/NotFound';
import Banner from './pages/Banner/Banner';
import Blog from './pages/Blog';
import Checkout from './pages/Checkout/Checkout';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Courses from './pages/Coursers/Courses';
import Faq from './pages/Faq';
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
         return fetch("https://server-side-blue.vercel.app/courses")
        },
        element:<Courses></Courses>
      },
      {
        path:"/courses/:id",
        loader:async({params})=>{
           return fetch(`https://server-side-blue.vercel.app/courses/${params.id}`)
        },
        element:<CourseDetails></CourseDetails>
      },
      {
        path:"/checkout/:id",
        loader:async({params})=>{
          return fetch(`https://server-side-blue.vercel.app/courses/${params.id}`)
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
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      } ,
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:"*",
        element:<NotFound></NotFound>
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