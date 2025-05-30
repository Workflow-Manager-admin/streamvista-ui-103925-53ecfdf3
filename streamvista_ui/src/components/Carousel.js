import React from "react";
import "./Carousel.css";

// PUBLIC_INTERFACE
function Carousel({ title, items, onCardClick }) {
  return (
    <section className="carousel-section">
      {title && <h2 className="carousel-title">{title}</h2>}
      <div className="carousel-row">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="carousel-card"
            tabIndex={0}
            onClick={() => onCardClick && onCardClick(item)}
            title={item.title}
          >
            <div
              className="carousel-card-img"
              style={{
                backgroundImage: `url(${item.image})`
              }}
            />
            <div className="carousel-card-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
