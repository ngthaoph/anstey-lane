import { Button } from "react-bootstrap";
import * as styles from "./ProductItem.css";

function ProductItem(props) {
  const { product, onRemoveProduct } = props;
  return (
    <div className={styles.product}>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h4>{product.name}</h4>
        <Button
          onClick={() => onRemoveProduct(product.id)}
          variant="danger"
          type="button"
        >
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
