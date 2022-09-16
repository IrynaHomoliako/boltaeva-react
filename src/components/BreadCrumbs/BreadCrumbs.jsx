import { Link } from "react-router-dom";

import "./BreadCrumbs.scss";

function BreadCrumbs() {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/cardproduct">
            Care cosmetics
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/cardproduct">
            Decorative cosmetics
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/cardproduct">
            Eyebrow cosmetics
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/cardproduct">
            Accessories
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;
