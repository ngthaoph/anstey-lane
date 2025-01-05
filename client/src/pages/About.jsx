import React from "react";
import AnsteyMug from "../assets/images/about/AnsteyMug.jpg";
import coffee1 from "../assets/images/about/coffee1.jpg";
import * as styles from "./About.css";
import roasting from "../assets/images/about/roasting.jpg";
import impact from "../assets/images/about/impact.jpg";
import employment from "../assets/images/about/employment.jpg";
function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <img src={AnsteyMug} alt="Anstey Mug" />
      </div>
      <header className={styles.textContainer}>
        <div className={styles.text}>
          <div>Anstey Lane</div>

          <div>
            Anstey Lane Coffee Roasters is an Australian wholesale organic
            specialty coffee roasting company based in Reservoir, VIC.
          </div>
        </div>
      </header>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <div>Our coffee</div>
          <div>
            <p>
              Since our inception over a decade ago, we have worked continuously
              to build strong relationships with some of the best coffee
              growers, cooperatives and producer groups in each coffee growing
              region around the world.
            </p>
            <p>
              Each lot of coffee we buy has been ethically traded, sourced from
              individual farms or small cooperatives and is traceable down to
              farm level.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <img src={coffee1} alt="coffee1" />
      </div>
      <div className={styles.textContainer}>
        <img src={roasting} alt="roasting" />"
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <div>Our Process</div>
          <p>
            Each batch begins with a careful selection of raw coffee, sourced
            from the world is best growing regions. From there, we profile,
            tweak, and cup rigorously until we are confident it reaches its full
            potential. Whether it is a single-origin offering or a meticulously
            crafted espresso blend, every coffee is roasted to highlight its
            unique qualities, while ensuring consistency and balance in every
            cup. Our espresso blends are carefully developed with a focus on
            year-round reliability. As seasonal variations in growing regions
            occur, we adjust our blends gradually and thoughtfully, always
            striving for the best possible cup. Each batch is cupped, screened,
            and tested by our roasters, who bring their expertise to every
            roast, ensuring you experience the perfect balance of flavor, aroma,
            and body with each brew.
          </p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <div>Our Impact</div>
          <p>
            For us, coffee quality is more than just the flavour in the cup:
            Environmental and social sustainability stand at the heart of
            everything we do. We are dedicated to reducing our negative impact
            on the earth and supporting the communities that took part in the
            production process.
          </p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <img src={impact} alt="impact" />
      </div>
    </div>
  );
}

export default About;
