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
        Anstey Lane
        <p>
          Anstey Lane Coffee Roasters is an Australian wholesale organic
          specialty coffee roasting company based in Melbourne, Victoria and
          Perth, WA.
        </p>
        <p>
          {" "}
          Our sole focus is the craft of carefully roasting the best organic
          coffees in the world using innovative and methodic roasting practices.
        </p>
        <p>
          {" "}
          We are committed to bringing the best selection of naturally grown,
          amazing tasting and in season specialty coffees to cafes and consumers
          in Australia.
        </p>
        <p>
          {" "}
          We are committed to bringing the best selection of naturally grown,
          amazing tasting and in season specialty coffees to cafes and consumers
          in Australia.
        </p>
      </header>
      <div className={styles.textContainer}>
        Our coffee
        <p>
          Since our inception over a decade ago, we have worked continuously to
          build strong relationships with some of the best coffee growers,
          cooperatives and producer groups in each coffee growing region around
          the world.
        </p>
        <p>
          Each lot of coffee we buy has been ethically traded, sourced from
          individual farms or small cooperatives and is traceable down to farm
          level.{" "}
        </p>
      </div>
      <div className={styles.textContainer}>
        <img src={coffee1} alt="coffee1" />
      </div>
      <div className={styles.textContainer}>
        <img src={roasting} alt="roasting" />"
      </div>
      <div className={styles.textContainer}>
        <p>
          Roasting We roast fresh daily in Melbourne on Loring Smart Roast and
          Probat roasting machines. Our roasting philosophy is centred around a
          need to forever improve, to relentlessly work towards the most
          enjoyable representation of a particular coffee. The Dukes roastery in
          Melbourne produces beautiful, freshly roasted specialty coffee each
          day with an unmatched attention to detail. Each lot is carefully
          selected and then profiled, tweaked and cupped rigorously before being
          made available to you. Our espresso blends are developed from the
          ground up with an eye for consistency not just from roast to roast but
          also throughout the year. Each batch is screened, cupped and tested by
          our roasters. As some growing regions come into season and others move
          on, we rework our blends gradually and deliberately so it is at its
          peak.
        </p>
      </div>
      <div className={styles.textContainer}>
        <p>
          Our Impact For us, coffee quality is more than just the flavour in the
          cup: Environmental and social sustainability stand at the heart of
          everything we do. We are dedicated to reducing our negative impact on
          the earth and supporting the communities that took part in the
          production process.
        </p>
      </div>
      <div className={styles.textContainer}>
        <img src={impact} alt="impact" />
      </div>
    </div>
  );
}

export default About;
