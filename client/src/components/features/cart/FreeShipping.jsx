import React from "react";

function FreeShipping({ subtotal }) {
  const remainingForFreeShipping = 150 - subtotal;
  return (
    <div>
      {/*MESSAGE */}
      <div>
        <h1>You're ${remainingForFreeShipping} away from Free Shipping</h1>
      </div>
      {/*RANGE BAR */}
      <div style={{ maxWidth: "760px" }}>
        <progress min="0" max="150" value={remainingForFreeShipping}></progress>
      </div>
    </div>
  );
}

export default FreeShipping;
