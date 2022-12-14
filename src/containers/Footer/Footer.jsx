import "./Footer.scss";
import { Link } from "react-router-dom";
import { images, socials, navigationLinks, products } from "../../constants";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={images.logoAbout} alt="logo" />
        </div>
        <div className="footer__info">
          <div className="footer__company">
            <h3 className="footer__info-title">Company</h3>
            <p className="footer__company-descr">
              The brand strives to create respect for its products among the
              audience, so that the presence of the company's products is a sign
              of prestige.
            </p>
            <ul className="footer__company-social">
              {socials.map((social) => (
                <li key={social.id}>
                  <img src={social.image} alt="social icon" />
                </li>
              ))}
            </ul>
            <div className="footer__info-company-sign">
              <img src={images.signature02} alt="sign" />
            </div>
          </div>

          <div className="footer__navigation">
            <h3 className="footer__info-title">Navigation</h3>
            <ul className="footer__navigation-list">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link to={`/${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__products">
            <h3 className="footer__info-title">Products</h3>
            <ul className="footer__products-list">
              {products.map((product) => (
                <li key={product.id}>
                  <Link to="/cardproduct">{product.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contacts">
            <h3 className="footer__info-title">Contacts</h3>
            <p className="footer__contacts-descr">
              We are open to new opportunities, so you can contact our company
              representatives for any questions
            </p>
            <div className="footer__contacts-links">
              <div className="footer__contacts-links_email">
                <img src={images.email} alt="email" />
                <a href="https://www.google.com/intl/ru/gmail/about/">E-mail</a>
              </div>
              <div className="footer__contacts-links_whatsapp">
                <img src={images.whatsapp} alt="whatsapp" />
                <a href="https://web.whatsapp.com/">Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
