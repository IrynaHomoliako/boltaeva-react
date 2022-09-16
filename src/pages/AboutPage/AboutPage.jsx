import {
  NavbarPages,
  BreadCrumbs,
  Founder,
  AnimatedPage,
} from "../../components";

import { images, feats } from "../../constants";
import { Footer } from "../../containers";

import "./AboutPage.scss";

function AboutPage() {
  return (
    <AnimatedPage>
      <div className="about-page">
        <NavbarPages />
        <BreadCrumbs />
        <div className="about-page__content container-pages">
          <h1 className="about-page__title page-title">About Boltaeva</h1>
          <p className="about-page__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market. The brand seeks to build respect
            among the audience for its products, so that the presence of the
            company's products is a sign of prestige, since the focus of the
            business is focused on exclusive sales, but not on the mass market.
          </p>
          <img className="about-page__img" src={images.aboutPage} alt="about" />
          <p className="about-page__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market.
          </p>
          <div className="about-page__feats">
            {feats.map((feat, index) => (
              <div className="about-page__feat" key={index}>
                <span>{feat.number}</span>
                <p>{feat.title}</p>
              </div>
            ))}
          </div>
          <p className="about-page__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market. The brand seeks to build respect
            among the audience for its products, so that the presence of the
            company's products is a sign of prestige, since the focus of the
            business is focused on exclusive sales, but not on the mass market.
          </p>
          <img
            className="about-page__img"
            src={images.aboutPage2}
            alt="about"
          />

          <Founder />
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default AboutPage;
