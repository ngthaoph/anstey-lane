import React from "react";
import * as styles from "./ButtonFrame.css";

function ButtonFrame({ children }) {
  return (
    <div className={styles.buttonFrame}>
      <div className={styles.buttonFrameElements}>{children}</div>
    </div>
  );
}

export default ButtonFrame;
