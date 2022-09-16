import React from "react";
import { images } from "../constants";

import { AnimatedPage } from "../components";

import { Header, Products, About, Gallery, Footer } from "../containers/index";

function Landing() {
  return (
    <AnimatedPage>
      <div>
        <Header />
        <Products />
        <About imgUrl={images.aboutImg} />
        <Gallery />
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Landing;
