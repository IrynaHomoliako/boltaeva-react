import { images } from "../../constants";

import "./Founder.scss";

function Founder() {
  return (
    <div>
      <p className="founder-quote">
        Each Boltaeva brand product is truly unique - everything is thought out
        to the smallest detail.
      </p>
      <div className="founder">
        <p className="founder-text">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.{" "}
        </p>
        <div className="founder-info">
          <div className="founder-info_box">
            <img
              className="founder-photo"
              src={images.founderImg}
              alt="founder"
            />
            <p className="founder-name">
              Zara Boltaeva <br /> <span>CEO, Founder</span>
            </p>
          </div>
          <img className="founder-sign" src={images.signature02} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default Founder;
