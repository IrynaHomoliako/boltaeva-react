import React from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { productsCatalog02 } from "../../constants";

import "./CardProductsSlider.scss";

function CardProductsSlider() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="card-product__slider  slider-container">
      <div className="card-product__slider-title container">
        <h3>
          We care about your beauty, so we recommend that you consider other
          products
        </h3>
        <div className="card-product__slider-images_arrows">
          <BsArrowLeftShort
            className="card-product__slider-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="card-product__slider-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
      <div className="card-product__slider-images_container" ref={scrollRef}>
        {productsCatalog02.map((product) => (
          <div className="card-product__slider-images_card" key={product.id}>
            <img src={product.image} alt="gallery_image" />
            <div className="card-product__slider-item-descr">
              <p className="card-product__item-name">{product.name}</p>
              <span className="card-product__item-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardProductsSlider;
