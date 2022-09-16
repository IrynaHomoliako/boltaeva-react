import { NavbarPages, BreadCrumbs, AnimatedPage } from "../../components";

import { Footer } from "../../containers";

import { images, levels } from "../../constants";

import "./Loyalty.scss";

function Loyalty() {
  return (
    <AnimatedPage>
      <div className="loyalty">
        <NavbarPages />
        <BreadCrumbs />
        <div className="loyalty__content container-pages">
          <h1 className="loyalty__title page-title">Loyalty program</h1>
          <img className="loyalty__img" src={images.loyaltyImg} alt="loyalty" />
          <p className="loyalty__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market. The brand seeks to build respect
            among the audience for its products, so that the presence of the
            company's products is a sign of prestige, since the focus of the
            business is focused on exclusive sales, but not on the mass market.
          </p>
          <div className="loyalty__levels-container">
            {levels.map((level, index) => (
              <div className="loyalty__levels" key={index}>
                <span>{level.number}</span>
                <h5>{level.title}</h5>
              </div>
            ))}
          </div>
          <p className="loyalty__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market. The brand seeks to build respect
            among the audience for its products, so that the presence of the
            company's products is a sign of prestige, since the focus of the
            business is focused on exclusive sales, but not on the mass market.
          </p>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Loyalty;
