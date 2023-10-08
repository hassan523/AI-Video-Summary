import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Sign-up/Signup";

const user = [
  {
    path: "/",
    element: <Home />,
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
