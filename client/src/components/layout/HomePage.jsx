import React from "react";
import { Link } from "react-router-dom";
import AboutUsBanner from "../layout/AboutUsBanner";
import TextSlideShow from "../layout/TextSlideShow";
import CollectionPage from "../../pages/product/CollectionPage";

import * as styles from "./HomePage.css";

function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.aboutBanner}>
        <AboutUsBanner />
      </div>
      <div className={styles.collectionPage}>
        <CollectionPage limit={4} />
      </div>
      <div className={styles.textSlideShow}>
        <TextSlideShow />
      </div>
    </div>
  );
}
export default HomePage;
