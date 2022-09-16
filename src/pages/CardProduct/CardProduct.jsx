import { useState } from "react";

import {
  NavbarPages,
  Button,
  CardProductsSlider,
  AnimatedPage,
} from "../../components";

import { About, Footer } from "../../containers";

import { images } from "../../constants";

import favorites from "../../assets/favorites.svg";
import favoritesCheck from "../../assets/favoritesCheck.svg";

import "./CardProduct.scss";

function CardProduct() {
  const [isFavorites, setFavorites] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <AnimatedPage>
      <div className="card-product">
        <NavbarPages />
        <div
          style={{
            height: "1px",
            width: "100%",
            background: "#555555",
            opacity: "0.05",
            marginBottom: "60px",
          }}
        />
        <div className="card-product__content container">
          <div className="card-product__container">
            <div className="card-product__img">
              <img src={images.cardProduct} alt="product" />
            </div>
            <div className="card-product__descr">
              <button
                className="card-product__favorites"
                onClick={() => setFavorites(!isFavorites)}
              >
                <img
                  src={isFavorites ? favoritesCheck : favorites}
                  alt="favorite"
                />
                Add to favorites
              </button>
              <h2 className="card-product__title">Milk for the face</h2>
              <div className="card-product__counter-container">
                <div className="card-product__counter">
                  <button onClick={handleDecrement}>-</button>
                  {count}
                  <button onClick={handleIncrement}>+</button>
                </div>
                <span className="card-product__price">54 €</span>
              </div>

              <Button
                className="card-product__add-button"
                icon={images.basketBlack}
                text="Add to shopping cart"
              />
              <p className="card-product__info">
                A truly magical box that in a matter of seconds will make your
                eyebrows as natural as possible and at the same time expressive.
                The natural composition of all positions in this box guarantees
                the safe use of products. Try it to be sure!
              </p>
            </div>
          </div>

          <About
            imgUrl={images.contactsForm}
            flex={{ flexDirection: "row-reverse" }}
            style={{ display: "none" }}
          />
          <About imgUrl={images.aboutImg} />
        </div>
        <CardProductsSlider />
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default CardProduct;
