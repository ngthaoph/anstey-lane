import React from "react";
import { Card, Container } from "react-bootstrap";
import AlButton from "./AlButton";
import * as styles from "./AlProductCard.css";

import { capitalizeFirstLetter } from "../../utils/readUtils.js";

function AlProductCard({ name, price, tasting, image, base, button }) {
  return (
    <Card className={styles.container}>
      <div className={styles.productCardContainer}>
        <Card.Img className={styles.productImage} variant="top" src={image} />
        <div className={styles.textContainer}>
          <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>

          <Card.Text>{base}</Card.Text>
          <Card.Text>{tasting}</Card.Text>
          <Card.Text>From ${price}</Card.Text>
          {button && <AlButton>Add to Cart</AlButton>}
        </div>
      </div>
    </Card>
  );
}

export default AlProductCard;
