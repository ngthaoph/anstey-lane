import React from "react";
import logoImg from "../../assets/images/anstey-lane.svg";
import * as styles from "./Navbar.css";
import { PiShoppingCartSimple } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils/readUtils";

function Navbar({ cartProducts, totalQuantity, quantity }) {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <a href="/">
            <img src={logoImg} alt="Logo" />
          </a>
        </div>

        {/*HEADER RIGHT*/}
        <div className={styles.headerRight}>
          <div className={styles.headerRightContainer}>
            {/** SHOW "DASHBOARD" LINK IF USER IS LOGGED IN */}
            {user ? (
              <>
                <Nav.Link className={styles.navLink} as={Link} to="/dashboard">
                  {capitalizeFirstLetter(user.username)}
                </Nav.Link>
              </>
            ) : (
              /** SHOW "SIGN UP" AND "LOGIN" LINKS IF USER IS NOT LOGGED IN */

              <Nav.Link as={Link} to="/login">
                <VscAccount />
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              <div style={{ display: "flex", flex: 1 }}>
                <PiShoppingCartSimple />
                {quantity && (
                  <div className={styles.cartCount}>{totalQuantity} </div>
                )}
              </div>
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
