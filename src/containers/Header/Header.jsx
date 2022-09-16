import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Navbar } from "../../components/index";
import { images } from "../../constants";

import "./Header.scss";

const sliderImages = [images.header01, images.header02, images.header03];

function Header() {
  return (
    <header className="header">
      <Navbar />

      <AliceCarousel
        renderPrevButton={() => {
          return (
            <img
              className="header__slider-arrow header__slider-arrow-left"
              src={images.arrowLeft}
              alt="prev btn"
            />
          );
        }}
        renderNextButton={() => {
          return (
            <img
              className="header__slider-arrow header__slider-arrow-right"
              src={images.arrowRight}
              alt="next btn"
            />
          );
        }}
      >
        {sliderImages.map((image, index) => (
          <img
            src={image}
            className="header__gallery-image"
            key={`gallery_image-${index + 1}`}
            alt={image.index}
          />
        ))}
      </AliceCarousel>
    </header>
  );
}

export default Header;
