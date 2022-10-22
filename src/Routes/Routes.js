import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DoctorsAndMap from "../Pages/DoctorsAndMap/DoctorsAndMap";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import SingleDepartment from "../Pages/SingleDepartment/SingleDepartment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/departments"),
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
          fetch(`http://localhost:5000/department/${params.id}`),
      },
      {
        path: "/doctor/:id",
        loader: async ({ params }) => fetch(`http://localhost:5000/doctor/${params.id}`),
        element: <DoctorsAndMap></DoctorsAndMap>,
      },
    ],
  },
]);

export default router;