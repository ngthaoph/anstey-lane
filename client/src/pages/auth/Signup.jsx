import { Form } from "react-bootstrap";
import { useState, useRef } from "react";

import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as styles from "./Signup.css";
import MbCard from "../../components/common/AlCard";
import MbButton from "../../components/common/AlButton";

import useAuth from "../../hooks/useAuth";
import AlButton from "../../components/common/AlButton";

import authService from "../../services/authService";
import leftPhoto from "../../assets/images/sign-up/leftPhoto.jpg";
function Signup() {
  //LOGIC

  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  const { loginSaveUser } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); //it won't get triggered until we hit the submit button

  const { username, email, password } = user;
  //HANDLE INPUT CHANGE
  const handleTextChange = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }; //need to reference the right name

  //EVENT FUNCTION
  const handleSubmit = async (e) => {
    // a. overwrite default submit button behaviour
    e.preventDefault();
    setLoading(true);

    // b. password confirmation (validation)
    if (password !== passwordConfirmRef.current.value) {
      toast.error("Passwords don't match");
      setLoading(false);
      return;
    }

    // c. calling the API endpoint: "/api/auth/register"
    try {
      const response = await authService.register(user);
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
      <div className={styles.mainContainer}>
        <div className={styles.halfContainer}>
          <img src={leftPhoto} alt="left-photo" className={styles.image} />
        </div>
        <div className={styles.halfContainer}>
          <MbCard title="Create Account" authform>
            {/*}
      //TEMPLATE */}
            <Form onSubmit={handleSubmit}>
              {/* 1. username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="username"
                  onChange={handleTextChange}
                  value={username}
                />
              </Form.Group>

              {/* 2. email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  name="email"
                  onChange={handleTextChange}
                  value={email}
                />
              </Form.Group>

              {/* 3. password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={handleTextChange}
                  value={password}
                />
              </Form.Group>

              {/* 4. password confirm */}
              <Form.Group className="mb-3" controlId="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  ref={passwordConfirmRef}
                />
              </Form.Group>

              {/* 5. submit btn */}
              <AlButton type="submit">
                {loading ? "Loading..." : "Create"}
              </AlButton>
            </Form>
            <div>
              <span>
                Already a member?
                <div>
                  <Link to="/login">Login here</Link>
                </div>
              </span>
            </div>
          </MbCard>
        </div>
      </div>
    </div>
  );
}

export default Signup;
