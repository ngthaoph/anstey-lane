import React from "react";
import { useNavigate } from "react-router-dom";
import coffee from "../../assets/coffee.jpg";
import AlButton from "../common/AlButton";
import * as styles from "./AboutUsBanner.css";
function AboutUsBanner() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${coffee})` }}
    >
      {/**CONTENT */}
      <div className={styles.contentContainer}>
        <div className={styles.contentContainerItems}>
          <h2>Only Organic.</h2>
          <h2>100% Organic Coffees since 2003.</h2>
          <div>
            <AlButton onClick={() => navigate("/about")}>
              Learn More About Us
            </AlButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBanner;
