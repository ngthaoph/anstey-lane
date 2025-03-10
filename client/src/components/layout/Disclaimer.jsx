import React from "react";
import * as styles from "./Disclaimer.css";

function Disclaimer() {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.disclaimer}>
        FREE STANDARD SHOPPING WITHIN AUSTRALIA FOR ORDERS OVER $200
      </div>
    </div>
  );
}

export default Disclaimer;
