import React, { useRef } from "react";
import "./Carousel.css";

// PUBLIC_INTERFACE
function Carousel({ title, items, onCardClick }) {
  const scrollRef = useRef(null);

  // Keyboard scroll for accessibility & parity with Hotstar
  function handleRowKey(event) {
    // Left/right scroll using key (Arrow keys or Home/End)
    if (!scrollRef.current) return;
    const row = scrollRef.current;
    const cardWidth = row.firstChild ? row.firstChild.offsetWidth : 212;
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      if (event.key === "ArrowRight") row.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
      if (event.key === "ArrowLeft") row.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
      if (event.key === "Home") row.scrollTo({ left: 0, behavior: "smooth" });
      if (event.key === "End") row.scrollTo({ left: row.scrollWidth, behavior: "smooth" });
    }
  }

  return (
    <section className="carousel-section section-spacing">
      {title && <h2 className="carousel-title section-title">{title}</h2>}
      <div
        className="carousel-row"
        tabIndex={0}
        ref={scrollRef}
        onKeyDown={handleRowKey}
        aria-label={title || "media row"}
        role="region"
      >
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="carousel-card"
            tabIndex={0}
            onClick={() => onCardClick && onCardClick(item)}
            onKeyDown={e => {
              if (["Enter", " "].includes(e.key)) {
                e.preventDefault();
                onCardClick && onCardClick(item);
              }
            }}
            title={item.title}
            aria-label={item.title}
            role="button"
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
