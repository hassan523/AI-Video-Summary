import { Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/main/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/Sign-up/Signup";
import AboutUs from "../pages/About-us/AboutUs";

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
    path: "/about-us",
    element: <AboutUs />,
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
