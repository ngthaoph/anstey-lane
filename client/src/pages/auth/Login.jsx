import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import MbCard from "../../components/common/AlCard";
import axios from "axios";
import AlButton from "../../components/common/AlButton";

import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import authService from "../../services/authService";
import rightPhoto from "../../assets/images/sign-up/rightPhoto.jpg";

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
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <div
        style={{
          display: "flex",

          flexDirection: "row",

          alignContent: "stretch",

          flex: 1,
        }}
      >
        <div style={{ maxWidth: "50%" }}>
          <img src={rightPhoto} alt="right-photo" />
        </div>
        <div
          style={{
            maxWidth: "50%",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            backgroundColor: "#EFF1EE",
          }}
        >
          <div>
            <MbCard title="Log In">
              <Form onSubmit={handleSubmit}>
                {/*Email*/}
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={email}
                    name="email"
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>

                {/*password*/}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={password}
                    name="password"
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
                {/* <MbButton buttonName="Submit"></MbButton> */}
                <AlButton loadingState={loading}>
                  {loading ? "..." : "Submit"}
                </AlButton>
              </Form>
            </MbCard>
            <div />
          </div>
          {/**IF HAVEN'T SIGNED UP */}
          <div style={{ textAlign: "center" }}>
            <div>Not Yet a Member with Anstey Lane Roastery?</div>

            <Link to="/signup">
              <AlButton>CREATE YOUR ACCOUNT</AlButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
