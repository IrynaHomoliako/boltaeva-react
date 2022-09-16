import React from "react";
import { Link } from "react-router-dom";

import { images, productsCatalog } from "../../constants";

import "./Products.scss";

function Products() {
  return (
    <div className="container">
      <div className="products">
        <div className="products__items">
          <div className="products__categories">
            <img src={images.productsCategory01} alt="categories" />
            <p className="products__categories-name">Care</p>
          </div>
          {productsCatalog.map((product) => (
            <Link to="/cardproduct">
              <div className="products__item" key={product.id}>
                <img src={product.image} alt="product" />
                <div className="products__item-descr">
                  <p className="products__item-name">{product.name}</p>
                  <span className="products__item-price">{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="products__items products__items-reverse">
          <div className="products__categories">
            <img src={images.productsCategory02} alt="categories" />
            <p className="products__categories-name">Beauty</p>
          </div>
          {productsCatalog.map((product) => (
            <Link to="/cardproduct">
              <div className="products__item" key={product.id}>
                <img src={product.image} alt="product" />
                <div className="products__item-descr">
                  <p className="products__item-name">{product.name}</p>
                  <span className="products__item-price">{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="products__items">
          <div className="products__categories">
            <img src={images.productsCategory03} alt="categories" />
            <p className="products__categories-name">Brows</p>
          </div>
          {productsCatalog.map((product) => (
            <Link to="/cardproduct">
              <div className="products__item" key={product.id}>
                <img src={product.image} alt="product" />
                <div className="products__item-descr">
                  <p className="products__item-name">{product.name}</p>
                  <span className="products__item-price">{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
