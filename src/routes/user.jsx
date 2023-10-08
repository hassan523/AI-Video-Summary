import { Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/main/Main";
import Home from "../pages/Home/Home";

const user = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
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
