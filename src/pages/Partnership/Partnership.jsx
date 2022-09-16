import {
  NavbarPages,
  Founder,
  BreadCrumbs,
  Button,
  AnimatedPage,
} from "../../components";

import { Footer } from "../../containers";

import { images } from "../../constants";

import "./Partnership.scss";

function Partnership() {
  return (
    <AnimatedPage>
      <div className="partnership">
        <NavbarPages />
        <BreadCrumbs />
        <div className="partnership__content container-pages">
          <h1 className="partnership__title page-title">
            Partnership information
          </h1>
          <img
            className="partnership__img"
            src={images.partnership}
            alt="partnership"
          />
          <p className="partnership__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market. The brand seeks to build respect
            among the audience for its products, so that the presence of the
            company's products is a sign of prestige, since the focus of the
            business is focused on exclusive sales, but not on the mass market.
          </p>
          <Button
            className="partnership__btn"
            icon={images.arrowBtn}
            text="Become a partner"
          />
          <Founder />
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Partnership;
