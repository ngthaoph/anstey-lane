import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import MbCard from "../../components/common/AlCard";
import axios from "axios";
import AlButton from "../../components/common/AlButton";

import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import authService from "../../services/authService";

// import * as styles from "./Login.css";

function Login() {
  //LOGIC
  const navigate = useNavigate();
  const { loginSaveUser } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { email, password } = user;
  const handleChange = function (e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  //handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // API Call to Write User Data
    try {
      const response = await authService.login(user);

      loginSaveUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <MbCard title="Log In">
      <Form onSubmit={handleSubmit}>
        {/*Email*/}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        {/*password*/}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {/* <MbButton buttonName="Submit"></MbButton> */}
        <AlButton loadingState={loading}>{loading ? "..." : "Submit"}</AlButton>
      </Form>
    </MbCard>
  );
}
export default Login;
