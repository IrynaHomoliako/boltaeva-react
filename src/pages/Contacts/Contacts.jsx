import {
  NavbarPages,
  BreadCrumbs,
  Button,
  AnimatedPage,
} from "../../components";

import { images, contacts } from "../../constants";
import { Footer, Gallery } from "../../containers";

import "./Contacts.scss";

function Contacts() {
  return (
    <AnimatedPage>
      <div className="contacts">
        <NavbarPages />
        <BreadCrumbs />
        <div className="contacts-page container">
          <h1 className="contacts-page__title page-title">Our contacts</h1>
          <img
            className="contacts-page__img"
            src={images.contactsImg}
            alt="contacts"
          />
          <div className="contacts-page__info-box">
            {contacts.map((contact) => (
              <div className="contacts-page__info" key={contact.id}>
                <h5>{contact.title}</h5>
                <p>{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="contacts-page__map">
            <img src={images.conatctsMap} alt="map" />
          </div>

          <Gallery />

          <div className="contacts-page__callback">
            <div className="contacts-page__form-box">
              <img
                className="contacts-page__form-logo"
                src={images.logoAbout}
                alt="logo"
              />
              <h3 className="contacts-page__form-title">Request a call back</h3>
              <form className="contacts-page__form">
                <label>Surname, name and patronymic</label>
                <input type="text" placeholder="Rosa More|" />
                <label>Contact number</label>
                <input type="phone" placeholder="+1 (901) 650 - 45 - 50" />
                <label>Email</label>
                <input type="email" placeholder="Rosamorena@gmail.com" />

                <Button
                  className="contacts-page__btn"
                  icon={images.arrowBtn}
                  text="Request call"
                />
              </form>
            </div>

            <div className="contacts-page__img-box">
              <img
                className="contacts-page__img"
                src={images.contactsForm}
                alt="contacts"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Contacts;
