import React from "react";
import { Button } from "react-bootstrap";

import * as styles from "./AlButton.css";
import PropTypes from "prop-types";

function AlButton({ children, loadingState, onClick, outline, navbar }) {
  return (
    <Button
      className={styles.button}
      type={onClick ? "button" : "submit"}
      onClick={onClick}
      disabled={loadingState ? 1 : 0}
      outline={outline ? 1 : 0}
      navbar={navbar ? 1 : 0}
    >
      {children}
    </Button>
  );
}
AlButton.propTypes = {
  children: PropTypes.any,
  loadingState: PropTypes.bool,
  outline: PropTypes.bool,
  navbar: PropTypes.bool,
  type: PropTypes.string,
};
export default AlButton;
