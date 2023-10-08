import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const user = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default user;
