import { NavbarPages, BreadCrumbs, AnimatedPage } from "../../components";

import { Footer } from "../../containers";

import { images, deliveryItems } from "../../constants";

import "./Delivery.scss";

function Delivery() {
  return (
    <AnimatedPage>
      <div className="delivery">
        <NavbarPages />
        <BreadCrumbs />
        <div className="delivery__content container-pages">
          <h1 className="delivery__title page-title">Delivery information</h1>
          <img className="delivery__img" src={images.delivery} alt="delivery" />
          <div className="delivery__order">
            <h4 className="delivery__order-title">
              Place an order on the website
            </h4>
            <ul className="delivery__order-list">
              {deliveryItems.map((item) => (
                <li className="delivery__order-item" key={item.id}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Delivery;
