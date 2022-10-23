import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllDoctors from "../Pages/AllDoctors/AllDoctors";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DoctorsAndMap from "../Pages/DoctorsAndMap/DoctorsAndMap";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import SingleDepartment from "../Pages/SingleDepartment/SingleDepartment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://med-center-server.vercel.app/departments"),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/department/:id",
        element: <SingleDepartment></SingleDepartment>,
        loader: async ({ params }) =>
          fetch(`https://med-center-server.vercel.app/department/${params.id}`),
      },
      {
        path: "/doctor/:id",
        loader: async ({ params }) =>
          fetch(`https://med-center-server.vercel.app/doctor/${params.id}`),
        element: (
          <PrivateRoute>
            <DoctorsAndMap></DoctorsAndMap>
          </PrivateRoute>
        ),
      },
      {
        path: "/alldoctors",
        element: <AllDoctors></AllDoctors>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;