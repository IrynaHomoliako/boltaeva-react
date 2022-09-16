import { images } from "../../constants";

import "./About.scss";

function About({ imgUrl, style, flex }) {
  return (
    <div className="about container" style={flex}>
      <div className="about__img">
        <img src={imgUrl} alt="about" />
      </div>
      <div className="about__info">
        <img
          className="about__info-img"
          src={images.logoAbout}
          alt="logoAbout"
        />
        <h3 className="about__info-title">
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </h3>
        <p className="about__info-descr">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </p>
        <div className="about__info-container" style={style}>
          <p className="about__info-name">
            Zara Boltaeva <br />
            <span className="about__info-founder">CEO, Founder</span>
          </p>
          <img src={images.signature02} alt="signature" />
        </div>
      </div>
    </div>
  );
}

export default About;
