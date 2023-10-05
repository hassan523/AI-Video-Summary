import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import InnerPage from "../pages/innerPage/InnerPage";

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
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default user;
