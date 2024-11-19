import React, { useState } from "react";
import AlButton from "../../components/common/AlButton";
import { capitalizeAllLetter } from "../../utils/readUtils.js";
import * as styles from "./ProductForm.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function ProductForm() {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = (delta) => {
    setQuantity((prevQuantity) => prevQuantity + delta);
  };
  return (
    <form>
      <div className={styles.container}>
        <label htmlFor="size">Size</label>
        <br></br>

        <AlButton>250g</AlButton>

        <AlButton>1kg</AlButton>
      </div>
      {/**/}
      <div className={styles.container}>
        <label htmlFor="size">Grind</label>
        <br></br>

        <AlButton>{capitalizeAllLetter("Filter")}</AlButton>

        <AlButton>{capitalizeAllLetter("Whole Beans")}</AlButton>

        <AlButton>{capitalizeAllLetter("Espresso")}</AlButton>
      </div>
      <div className={styles.container}>
        <label htmlFor="quantity">Quantity</label>
        <br></br>

        <AlButton>
          {
            <>
              <FaMinus onClick={() => changeQuantity(-1)} />
              {quantity}

              <FaPlus onClick={() => changeQuantity(1)} />
            </>
          }
        </AlButton>
      </div>
    </form>
  );
}

export default ProductForm;
