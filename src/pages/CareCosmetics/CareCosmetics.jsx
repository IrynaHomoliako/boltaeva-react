import { NavbarPages, BreadCrumbs, AnimatedPage } from "../../components";

import { About, Footer } from "../../containers";

import { images, careCosmetics } from "../../constants";

import "./CareCosmetics.scss";

function CareCosmetics() {
  return (
    <AnimatedPage>
      <div className="care-cosmetics">
        <NavbarPages />
        <BreadCrumbs />
        <div className="care-cosmetics__content container">
          <h1 className="care-cosmetics__title page-title">Care cosmetics</h1>
          <img
            className="care-cosmetics__img"
            src={images.loyaltyImg}
            alt="cosmetics"
          />

          <div className="care-cosmetics__catalogue">
            {careCosmetics.map((item) => (
              <div className="care-cosmetics__item" key={item.id}>
                <img src={item.image} alt="product" />
                <div className="care-cosmetics__item-descr">
                  <p className="care-cosmetics__item-name">{item.name}</p>
                  <span className="care-cosmetics__item-price">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <About imgUrl={images.contactsForm} style={{ display: "none" }} />
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default CareCosmetics;
