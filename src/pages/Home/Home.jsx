import React from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className={`${style.heading}`}>okokokokokokok</h1>
      <button onClick={() => navigate("/inner-page")}>next</button>
    </div>
  );
};

export default Home;
