import { images, gallery } from "../../constants";

import Button from "../../components/Button/Button";

import "./Gallery.scss";

function Gallery() {
  return (
    <div className="gallery container">
      <div className="gallery__header">
        <h1 className="gallery__title">
          Boltaeva - this is a real society of girls who show love to themselves
        </h1>
        <Button text="Instagram" icon={images.instagramBtn} />
      </div>

      <div className="gallery__items">
        {gallery.map((image, index) => (
          <img
            src={image.image}
            key={`gallery_items-${index + 1}`}
            alt={image.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
