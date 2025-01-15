import React, { useState } from "react";
import * as styles from "./ShopOptionsFilter.css";

function ShopOptionsFilter({
  baseOptions,
  handleSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className={styles.shopFilter}>
      <ul className={styles.ulFilter}>
        {baseOptions.map((filter) => (
          <li
            key={filter}
            className={`${styles.liFilter} 
                ${selectedCategory === filter ? "active" : ""} `}
            onClick={() => handleSelectedCategory(filter)}
          >
            <a
              className={`${styles.aLink} ${
                selectedCategory === filter ? "active" : ""
              }   `}
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
