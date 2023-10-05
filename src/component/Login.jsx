import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import style from "./LoginSignup.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog className={style.loginbox}>
        <div className={style.insidebox}>
          <Modal.Title style={{ marginLeft: "1rem" }}>LOGIN</Modal.Title>

          <Modal.Body>
            <span>Email</span>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <span>Password</span>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Password"
                aria-describedby="basic-addon2"
                type="password"
              />
            </InputGroup>
            <Button
              style={{
                backgroundColor: isHovered ? "#c7042e" : "#ee1040",
                border: "none",
                borderRadius: "9px",
                boxShadow: "1px 1px 2px black",
                width: "26rem",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              LOGIN
            </Button>
          </Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <hr style={{ width: "13rem" }} />
            <p
              style={{
                textAlign: "center",
                marginTop: "0.2rem",
                border: "1px solid lightgrey",
                padding: "2px 6px 2px 6px",
                borderRadius: "4px",
              }}
            >
              OR
            </p>
            <hr style={{ width: "13rem" }} />
          </div>
          <p style={{ textAlign: "center" }}>
            Don't have account?{" "}
            <button className={style.btn} onClick={() => navigate("/signup")}>
              SIGN UP
            </button>
          </p>
        </div>
      </Modal.Dialog>
    </div>
  );
};
export default Login;
