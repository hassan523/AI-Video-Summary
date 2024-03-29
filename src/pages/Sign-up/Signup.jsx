import React from "react";
import style from "./signup.module.css";
import { Container } from "react-bootstrap";
import gif from "../../assets/login/login_bg.gif";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
            filter: "blur(20px)",
            height: "100%",
          }}
          className={style.login_bg}
        />
        <div className={style.login_fields_wrapper}>
          <h1>YOUSUMMARISE</h1>
          <form
            className={style.form_sign}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 style={{ color: "white", fontWeight: "400" }}>
              REGISTRATION FORM
            </h3>
            <label>
              <h6>Name</h6>
              <div className={style.divtext}>
                <input
                  type="text"
                  placeholder="Your name"
                  className={style.textfiled}
                />
              </div>
            </label>
            <label>
              <h6>Email</h6>
              <div className={style.divtext}>
                <input
                  type="text"
                  placeholder="Your email address"
                  className={style.textfiled}
                />
              </div>
            </label>
            <label>
              <h6>Password</h6>
              <div className={style.divtext}>
                <input
                  type="password"
                  placeholder="Your password"
                  className={style.textfiled}
                />
              </div>
            </label>
            <label>
              <h6>Confirm Password</h6>
              <div className={style.divtext}>
                <input
                  type="password"
                  placeholder="Re-Type password"
                  className={style.textfiled}
                />
              </div>
            </label>
            <button className={style.btn_register}>Register</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
