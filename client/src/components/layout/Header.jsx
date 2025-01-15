// Import Bootstrap modules
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";

import * as styles from "./Header.css";
import AlButton from "../common/AlButton";

import Disclaimer from "./Disclaimer";
import logoImg from "../../assets/images/anstey-lane.png";
import home from "../../assets/images/home.jpg";
import useAuth from "../../hooks/useAuth";
import { VscAccount } from "react-icons/vsc";
import shoppingCart from "../../assets/shoppingCart.svg";

const Header = ({ cartProducts }) => {
  const { user, logout } = useAuth();
  const quantity = cartProducts
    .map((element) => element.quantity)
    .reduce((element, acc) => (acc = element + acc));
  console.log(quantity);

  return (
    <>
      <Disclaimer />

      <Navbar
        className={styles.navbar}
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className={styles.brandLink} as={Link} to="/">
            <img className={styles.logo} src={logoImg} alt="anstey_lane" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* LEFT - STD NAVLINKS */}
            <Nav className="me-auto">
              <Nav.Link className={styles.navLink} as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link
                className={styles.navLink}
                as={Link}
                to="/store/products"
              >
                Products
              </Nav.Link>
            </Nav>
            {/* RIGHT - AUTH NAVLINKS */}
            <Nav>
              {!user && (
                <Nav.Link className={styles.navLink} as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              )}

              {!user && (
                <Nav.Link className={styles.navLink} as={Link} to="/login">
                  Log&nbsp;In
                </Nav.Link>
              )}
              {user && (
                <Nav.Link className={styles.navLink} as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {user && <AlButton onClick={() => logout()}>Log out</AlButton>}

              <Nav.Link className={styles.navLink} as={Link} to="/cart">
                <div style={{ display: "flex", flex: 1 }}>
                  <img src={shoppingCart} />
                  {/**CART COUNT */}
                  <div className={styles.cartCount}>{quantity}</div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
