import React, { useState } from "react";
import AlButton from "../../components/common/AlButton";
import { capitalizeAllLetter } from "../../utils/readUtils.js";
import * as styles from "./ProductForm.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import ButtonFrame from "../../components/common/ButtonFrame";

function ProductForm({
  handleNewCart,
  id,
  handleDisplayPrice,
  displayPrice,
  setDisplayPrice,
}) {
  const sizeOptions = ["250g", "1kg"];
  const grindOptions = ["filter", "decaf", "whole beans"];
  const [isLoading, setIsLoading] = useState(true);

  const handleQuantity = (delta, e) => {
    let quantity = watch("quantity");

    setValue("quantity", quantity + delta);
  };

  const handleSize = (size) => {
    setValue("size", size);
    handleDisplayPrice(size);
  };
  const handleGrind = (grind) => {
    setValue("grind", grind);
  };

  const { control, handleSubmit, watch, setValue, register } = useForm({
    defaultValues: {
      size: "250g",
      grind: "",
      quantity: 0,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const product = [
      {
        ...data,
        id: id,
      },
    ];
    handleNewCart(product);
    setIsLoading(false);
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <fieldset>
            <legend>Size</legend>

            <span>
              <AlButton
                key={sizeOptions[0]}
                type="button"
                value={sizeOptions[0]}
                onClick={() => handleSize(sizeOptions[0])}
                active={watch("size") === sizeOptions[0] ? true : false}
              >
                {sizeOptions[0]}
              </AlButton>
              <AlButton
                key={sizeOptions[1]}
                type="button"
                value={sizeOptions[1]}
                onClick={() => handleSize(sizeOptions[1])}
                active={watch("size") === sizeOptions[1] ? true : false}
              >
                {sizeOptions[1]}
              </AlButton>
            </span>
          </fieldset>
        </div>

        {/*GRIND OPTIONS*/}
        {watch("size") === "250g" ? (
          <div className={styles.container}>
            <fieldset>
              <legend>Grind</legend>
              <span>
                <AlButton
                  key={grindOptions[0]}
                  type="button"
                  value={grindOptions[0]}
                  onClick={() => handleGrind(grindOptions[0])}
                  active={watch("grind") === grindOptions[0] ? true : false}
                >
                  {grindOptions[0]}
                </AlButton>
                <AlButton
                  key={grindOptions[1]}
                  type="button"
                  value={grindOptions[1]}
                  onClick={() => handleGrind(grindOptions[1])}
                  active={watch("grind") === grindOptions[1] ? true : false}
                >
                  {grindOptions[1]}
                </AlButton>
                <AlButton
                  key={grindOptions[2]}
                  type="button"
                  value={grindOptions[2]}
                  onClick={() => handleGrind(grindOptions[2])}
                  active={watch("grind") === grindOptions[2] ? true : false}
                >
                  {grindOptions[2]}
                </AlButton>
              </span>
            </fieldset>
          </div>
        ) : null}

        <div className={styles.container}>
          <label htmlFor="quantity">Quantity</label>
          <br />
          <div className={styles.productQuantityBox}>
            <ButtonFrame>
              <div>
                <FaMinus onClick={() => handleQuantity(-1)} />
              </div>
              <div>{watch("quantity")}</div>
              <div>
                <FaPlus onClick={() => handleQuantity(1)} />
              </div>
            </ButtonFrame>
          </div>
        </div>
        <AlButton type="submit" active={isLoading ? "" : "active"}>
          {isLoading ? "Add to Cart" : "Added"}
        </AlButton>
      </form>
    </div>
  );
}

export default ProductForm;
