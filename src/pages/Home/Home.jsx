import React, { useState, useRef } from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(0);
  // const [url, seturl] = useState("");
  const [onSubmit, setonSubmit] = useState(false);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className={style.box}>
        <div className="w-100">
          <Form.Label htmlFor="basic-url">Paste Youtube URL here</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">URL</InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="https://www.youtube.com/"
              // onChange={(e) => seturl(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className={style.rad}>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Bullet Points"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                onChange={() => setCheck(1)}
              />
              <Form.Check
                inline
                label="Paragraph form"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                onChange={() => setCheck(2)}
              />
            </div>
          ))}
          {check !== 0 ? (
            <div className={style.aftercheck}>
              {check === 1 ? (
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Key points
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              ) : (
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Words Count
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              )}
            </div>
          ) : null}
        </div>
        <div className={style.btn}>
          <Button onClick={() => setonSubmit(true)}>Submit</Button>
        </div>
        {onSubmit ? (
          <div className={style.summary}>
            <h3>Summary</h3>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default Home;
