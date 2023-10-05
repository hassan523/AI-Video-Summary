import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import style from "./LoginSignup.module.css";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Signup = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog className={style.loginbox}>
        <div className={style.insidebox}>
          <Modal.Title style={{ marginLeft: "1rem" }}>SIGN UP</Modal.Title>

          <Modal.Body>
            <span>Name</span>
            <InputGroup className="mb-3">
              <Form.Control aria-label="Name" aria-describedby="basic-addon1" />
            </InputGroup>
            <span>Email</span>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <span>Password</span>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Password"
                aria-describedby="basic-addon3"
                type="password"
              />
            </InputGroup>
            <Button
              className={style.btnlogin}
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
              SIGN UP
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "1.4rem",
            }}
          >
            <button
              style={{
                color: "#DB4437",
                border: "3.5px solid #DB4437",
                borderRadius: "25px",
                height: "2.2rem",
                width: "2.2rem",
                textAlign: "center",
                backgroundColor: "white",
                paddingBottom: "0.3rem",
              }}
            >
              <FaGoogle />
            </button>
            <button
              style={{
                color: "#4267B2",
                border: "3.5px solid #4267B2",
                borderRadius: "25px",
                height: "2.2rem",
                width: "2.2rem",
                textAlign: "center",
                backgroundColor: "white",
                paddingBottom: "0.3rem",
              }}
            >
              <FaFacebook />
            </button>
            <button
              style={{
                color: "#0A66C2",
                border: "3.5px solid #0A66C2",
                borderRadius: "25px",
                height: "2.2rem",
                width: "2.2rem",
                textAlign: "center",
                backgroundColor: "white",
                paddingBottom: "0.3rem",
              }}
            >
              <FaLinkedin />
            </button>
          </div>
          <p style={{ textAlign: "center" }}>
            Already a user?{" "}
            <button className={style.btn} onClick={() => navigate("/login")}>
              LOGIN
            </button>
          </p>
        </div>
      </Modal.Dialog>
    </div>
  );
};
export default Signup;
