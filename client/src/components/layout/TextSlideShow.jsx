import React from "react";
import background from "../../assets/background.webp"; // Correct path to the background image
import * as styles from "./TextSlideShow.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function TextSlideShow() {
  const [emblaRef] = useEmblaCarousel({ loop: true, autoplay: true }, [
    Autoplay(),
  ]);

  // Sample texts for the carousel
  const texts = [
    {
      text: "This coffee pairs perfectly with our gear—bold, rich, and ready for any adventure.",
      name: "Stanley",
    },
    {
      text: "Fuel your day with the finest brew—this coffee is as durable and strong as our mugs.",
      name: "The Sydney Morning Herald",
    },
    {
      text: "Just like our products, this coffee delivers top-notch quality that keeps you going all day long.",
      name: "Yeti",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: ` url( ${background})`,
        backgroundSize: "cover",
        height: "100vh",

        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",

        alignItems: "center",
        width: "100%",

        gap: "50px",

        padding: "5vw",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          textAlign: "center;",
        }}
      >
        <div
          className={styles.embla}
          ref={emblaRef}
          style={{ justifyContent: "center" }}
        >
          <div className={styles.emblaContainer}>
            {texts.map((item, index) => (
              <div key={index} className={styles.emblaSlide}>
                <div key={index} className={styles.testimonialText}>
                  {item.text}
                </div>
                <p className={styles.testimonialName}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextSlideShow;
