import * as styles from './ProductCart.css';
import Offcanvas from "react-bootstrap/Offcanvas";

function ProductCart({ show, handleClose, cartProducts }) {
  return (
    <>
      <Offcanvas 
        show={show} 
        onHide={handleClose}
        style={{ display: "none" }}
      ></Offcanvas>
      <div 
        className={`offcanvas offcanvas-end ${styles.cartCanvas} ${show ? 'show' : ""}`} 
        data-bs-scroll="true"
        data-bs-backdrop="true"
        tabIndex="-1"
        aria-labelledby="cartCanvas"
      >
        <div className={`offcanvas-header ${styles.cartHeader}`}>
          <h5 className={styles.cartTitle}>Shopping Cart &#40;{cartProducts.length}&#41;</h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={handleClose} 
            aria-label="Close"
          ></button>
        </div>
        <div className={`offcanvas-body ${styles.cartBody}`}>
          {/* LOOP & FORMAT STATE PRODUCTS HERE! */}
          <ul>
            {cartProducts.length > 0 && cartProducts.map( cartProduct => <li key={cartProduct.id}>{cartProduct.name}: {cartProduct.quantity}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
