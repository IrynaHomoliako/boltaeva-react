import {
  NavbarPages,
  BreadCrumbs,
  Founder,
  AnimatedPage,
} from "../../components";

import { Footer } from "../../containers";

import { images } from "../../constants";

import "./WorkingProcess.scss";

function WorkingProcess() {
  return (
    <AnimatedPage>
      <div className="process">
        <NavbarPages />
        <BreadCrumbs />
        <div className="process__content container-pages">
          <h1 className="process__title page-title">Working process</h1>
          <p className="process__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market. The brand seeks to build respect
            among the audience for its products, so that the presence of the
            company's products is a sign of prestige, since the focus of the
            business is focused on exclusive sales, but not on the mass market.
          </p>
          <Founder />
          <p className="process__text">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market.
          </p>
          <img
            className="process__img"
            src={images.workingProcess}
            alt="process"
          />
          <p className="process__text">
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

export default WorkingProcess;
