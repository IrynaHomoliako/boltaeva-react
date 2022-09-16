import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

import images from "../../constants/images";

import { NavImages } from "../index";

import "./Navbar.scss";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar section-layout">
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/carecosmetics" className="navbar__item-link">
            Catalog
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/aboutpage" className="navbar__item-link">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/delivery" className="navbar__item-link">
            Delivery
          </Link>
        </li>
      </ul>
      <div className="navbar__logo">
        <Link to="/">
          <NavImages imgUrl={images.logo} />
        </Link>
      </div>
      <div className="navbar__options">
        <Link to="/contacts" className="navbar__item-link">
          Contacts
        </Link>
        <div className="navbar__icons">
          <a className="navbar__icons-link" href="/">
            <NavImages imgUrl={images.search} />
          </a>
          <a className="navbar__icons-link" href="/">
            <NavImages imgUrl={images.basket} />
          </a>
          <a className="navbar__icons-link" href="/">
            <Link to="/login">
              <NavImages imgUrl={images.user} />
            </Link>
          </a>
        </div>
      </div>

      <div className="navbar__smallscreen">
        <div className="navbar__smallscreen-top">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
            className="overlay__open"
          />
          <Link to="/">
            <img src={images.logo} alt="logo" />
          </Link>
          <a className="navbar__icons-link" href="/">
            <NavImages imgUrl={images.basket} />
          </a>
        </div>

        {toggleMenu && (
          <div className="navbar__smallscreen-overlay slide-bottom">
            <div className="navbar__smallscreen-overlay-top">
              <RiCloseFill
                className="overlay__close"
                fontSize={25}
                onClick={() => setToggleMenu(false)}
              />
              <a className="navbar__icons-link" href="/">
                <NavImages imgUrl={images.basketBlack} />
              </a>
              <div className="navbar__smallscreen-logo-container">
                <Link to="/">
                  <img
                    className="navbar__smallscreen-logo"
                    src={images.logoPages}
                    alt="logo"
                  />
                </Link>
              </div>
              <a className="navbar__icons-link" href="/">
                <Link to="/login">
                  <NavImages imgUrl={images.userBlack} />
                </Link>
              </a>
            </div>
            <ul className="navbar__smallscreen-links">
              <li className="navbar__item">
                <Link to="/carecosmetics" className="navbar__item-link">
                  Catalog
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/aboutpage" className="navbar__item-link">
                  About
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/delivery" className="navbar__item-link">
                  Delivery
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/contacts" className="navbar__item-link">
                  Contacts
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/loyalty" className="navbar__item-link">
                  Bonus program
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/process" className="navbar__item-link">
                  Work process
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/partnership" className="navbar__item-link">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
