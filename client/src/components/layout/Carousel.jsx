import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import carousel1 from "../../assets/images/carousel/carousel1.jpg";
import carousel2 from "../../assets/images/carousel/carousel2.jpg";
import carousel3 from "../../assets/images/carousel/carousel3.jpg";
import Autoplay from "embla-carousel-autoplay";
import { embla, emblaContainer, emblaSlide } from "./Carousel.css";
const sliderData = [
  {
    id: 1,
    imageUrl: carousel1,
  },
  {
    id: 2,
    imageUrl: carousel2,
  },
  {
    id: 3,
    imageUrl: carousel3,
  },
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className={embla} ref={emblaRef}>
      <div className={emblaContainer}>
        {sliderData?.map((item) => {
          return (
            <div key={item.id} className={emblaSlide}>
              <img src={item.imageUrl} alt="carousel slide" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
