import React from "react";
import * as styles from "./FreeShipping.css";

function FreeShipping({ subtotal }) {
  const remainingForFreeShipping = 150 - subtotal;
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
