import React from "react";
import * as styles from "./FreeShipping.css";
import { FaShippingFast } from "react-icons/fa";

function FreeShipping({ subtotal }) {
  const remainingForFreeShipping = 150 - subtotal;
  const percentage = (remainingForFreeShipping / 150) * 100;
  const getIconPosition = (position) => {
    return `${(position / 150) * 100}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.shippingContainer}>
        {/*MESSAGE */}
        <div className={styles.shippingCalculator}>
          <div>You're ${remainingForFreeShipping} away from Free Shipping</div>
        </div>
        {/*RANGE BAR */}
        <div className={styles.rangeBar}>
          <progress
            min="0"
            max="150"
            height="15px"
            value={remainingForFreeShipping}
            style={{
              height: "15px", // Define height for the progress bar

              borderRadius: "5px", // Optional: rounding the corners of the progress bar
            }}
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default FreeShipping;
