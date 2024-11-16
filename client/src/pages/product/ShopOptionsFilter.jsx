import React, { useState } from "react";
import * as styles from "./ShopOptionsFilter.css";
import productService from "../../services/productService";
import axios from "axios";

function ShopOptionsFilter({
  baseOptions,
  handleSelectedCategory,
  selectedCategory,
}) {
  const [activeFilter, setActiveFilter] = useState();
  //set active filter by clicking on the filter
  const handleFilter = (index) => {
    setActiveFilter(index);
  };

  return (
    <div className={styles.shopFilter}>
      <ul className={styles.ulFilter}>
        {baseOptions.map((filter) => (
          <li
            key={filter}
            className={styles.liFilter}
            onClick={() => handleSelectedCategory(filter)}
          >
            <a
              className={`${styles.aLink} ${
                activeFilter === filter ? styles.activeLink : ""
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopOptionsFilter;

{
  /* <li className={styles.liFilter}>
          <a className={styles.aLink} href="/store/products">
            All
          </a>
        </li>
        <li className={styles.liFilter}>
          <a className={styles.aLink}>Espresso</a>
        </li>
        <li className={styles.liFilter}>
          <a className={styles.aLink}>Filter</a>
        </li>
        <li className={styles.liFilter}>
          <a className={styles.aLink}>Blend</a>
        </li>*/
}
