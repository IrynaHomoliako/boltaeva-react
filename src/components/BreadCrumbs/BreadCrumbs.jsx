import "./BreadCrumbs.scss";

function BreadCrumbs() {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="/">
            Care cosmetics
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="/">
            Decorative cosmetics
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="/">
            Eyebrow cosmetics
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="/">
            Accessories
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;
