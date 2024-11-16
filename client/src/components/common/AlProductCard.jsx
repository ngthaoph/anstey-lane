import React from "react";
import { Card, Container } from "react-bootstrap";
import AlButton from "./AlButton";
import * as styles from "./AlProductCard.css";

import { capitalizeFirstLetter } from "../../utils/readUtils.js";

function AlProductCard({ name, price, tasting, image, base }) {
  return (
    <Card className={styles.productCard}>
      <Card.Img className={styles.productImage} variant="top" src={image} />
      <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>

      <Card.Text>{base} roast</Card.Text>
      <Card.Text>{tasting}</Card.Text>
      <Card.Text>{price}</Card.Text>

      <AlButton>Add to Cart</AlButton>
    </Card>
  );
}

export default AlProductCard;
