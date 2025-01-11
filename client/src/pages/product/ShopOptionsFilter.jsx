import React, { useState } from "react";
import * as styles from "./ShopOptionsFilter.css";
import productService from "../../services/productService";
import axios from "axios";

function ShopOptionsFilter({
  baseOptions,
  handleSelectedCategory,
  selectedCategory,
}) {
  const [activeFilter, setActiveFilter] = useState(null); // Now track the active filter by value (string)

  // Set active filter by clicking on the filter
  const handleActive = (filter) => {
    setActiveFilter(filter);
    handleSelectedCategory(filter);
  };
  console.log(selectedCategory, activeFilter);
  return (
    <div className={styles.shopFilter}>
      <ul className={styles.ulFilter}>
        {baseOptions.map((filter) => (
          <li
            key={filter}
            className={`${styles.liFilter} 
                ${activeFilter === filter ? "active" : ""} `}
            onClick={() => handleActive(filter)}
          >
            <a
              className={`${styles.aLink} ${
                activeFilter === filter ? "active" : ""
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
