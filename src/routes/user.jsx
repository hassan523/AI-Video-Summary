import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import InnerPage from "../pages/innerPage/InnerPage";
import Login from "../component/Login";
import Signup from "../component/Signup";

const user = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inner-page",
    element: <InnerPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default user;
