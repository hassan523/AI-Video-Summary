import React, { useState } from "react";
import style from "./login.module.css";
import { Container } from "react-bootstrap";
import gif from "../../assets/Login/login_bg.gif";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={style.login_wrapper}>
      <h6
        className={style.Login_back}
        onClick={() => navigate("/")}
        role="button"
      >
        BACK
      </h6>
      <Container className={style.login_container_wrapper}>
        <img
          src={gif}
          alt="no img found"
          style={{
            objectFit: "contain",
            position: "absolute",
            height: "100%",
            filter: "blur(10px)",
          }}
          className={style.login_bg}
        />
        <div className={style.login_fields_wrapper}>
          <h1>YOUSUMMARISE</h1>
          <h3>LOGIN FORM</h3>
          <form className={style.form} method="POST">
            <label className={style.label}>
              <h6>Email*</h6>
              <div className={style.password_fields}>
                <input
                  type="text"
                  placeholder="Email"
                  className={style.password_input}
                />
              </div>
            </label>

            <label className={style.label}>
              <h6>Password*</h6>
              <div className={style.password_fields}>
                <input
                  type="password"
                  placeholder="Min. 8 Characters"
                  name="password"
                  className={style.password_input}
                />
              </div>
            </label>
            <div className={style.logged_forget_wrapper}>
              <div className={style.logged_in}>
                <input type="checkbox" /> <p>Remember Me</p>
              </div>
              <div className={style.logged_in}>
                <input type="checkbox" /> <p>Hear From Us</p>
              </div>
            </div>

            <button className={style.signin_btn}>Sign In</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
