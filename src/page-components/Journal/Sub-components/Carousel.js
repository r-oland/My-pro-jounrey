// Components==============
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import Arrows from "./Arrows";
// =========================

export default function Carousel({ children, amountOfPages }) {
   return (
      <CarouselProvider
         naturalSlideWidth={0}
         naturalSlideHeight={0}
         totalSlides={amountOfPages}
         infinite={true}
      >
         <Slider className="test">{children}</Slider>
         <Arrows />
      </CarouselProvider>
   );
}
