import React, { useEffect, useRef } from "react";
import "./Hero.css";

// PUBLIC_INTERFACE
function Hero({ heroData, indicators, onIndicatorClick }) {
  // Default hero data for illustration
  const data =
    heroData ||
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1400&q=80",
      category: "HIGHLIGHTS | QUALIFIER 1",
      titleLeft: "PBKS",
      vs: "vs",
      titleRight: "RCB",
      meta: "RCB won by 4 wickets, enter final",
      date: "28th May, 2025 | 7:00pm · Cricket Final",
      description:
        "PBKS and RCB face off in the epic qualifier. Relive the moments as RCB storm into the finals with a dramatic chase.",
      primaryCTA: { text: "Watch Now", onClick: () => {} }
    };

  // Default indicator thumbnails (for carousel preview, circular images)
  const indicatorThumbs = indicators || [
    "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=80&q=60",
    "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=80&q=60"
  ];

  // Animation/focus: animate overlay content on mount
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add("overlay-animated-in");
    }
  }, []);

  // Keyboard action for primary CTA accessibility
  const handleCTAKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (data.primaryCTA && typeof data.primaryCTA.onClick === "function") {
        data.primaryCTA.onClick();
      }
    }
  };

  // Keyboard action for carousel indicator/accessibility
  const handleIndicatorKeyDown = (e, idx) => {
    if ((e.key === "Enter" || e.key === " ") && typeof onIndicatorClick === "function") {
      e.preventDefault();
      onIndicatorClick(idx);
    }
  };

  // ARIA: The hero/banner is a banner landmark with readable text, and content is accessible
  return (
    <section className="hero-banner" role="banner" aria-label="Featured highlight">
      <div
        className="hero-background-image"
        style={{
          backgroundImage: `url("${data.backgroundImage}")`
        }}
        aria-hidden="true"
      >
        <div className="hero-gradient-overlay" />
      </div>
      <div className="overlay-content" ref={contentRef}>
        <div className="category-pill">{data.category}</div>
        <div className="hero-title" aria-label={`${data.titleLeft} versus ${data.titleRight}`}>
          <span className="hero-title-main">{data.titleLeft}</span>
          <span className="hero-title-vs"> {data.vs} </span>
          <span className="hero-title-main">{data.titleRight}</span>
        </div>
        <div className="hero-meta">{data.meta}</div>
        <div className="hero-date-time">{data.date}</div>
        <div className="hero-description">{data.description}</div>
        <div className="cta-row">
          <button
            className="primary-cta-button"
            onClick={data.primaryCTA.onClick}
            aria-label={data.primaryCTA.text}
            tabIndex={0}
            onKeyDown={handleCTAKeyDown}
          >
            {data.primaryCTA.text}
          </button>
          <div className="carousel-indicator-thumbnails" aria-label="Next spotlight items">
            {indicatorThumbs.map((thumb, i) => (
              <img
                src={thumb}
                alt={`Preview ${i + 1}`}
                className="indicator-thumbnail"
                key={thumb + i}
                draggable="false"
                tabIndex={typeof onIndicatorClick === "function" ? 0 : -1}
                style={{ cursor: typeof onIndicatorClick === "function" ? "pointer" : undefined }}
                onClick={typeof onIndicatorClick === "function" ? () => onIndicatorClick(i) : undefined}
                onKeyDown={typeof onIndicatorClick === "function"
                  ? (e) => handleIndicatorKeyDown(e, i)
                  : undefined}
                aria-label={typeof onIndicatorClick === "function" ? `Go to item ${i + 2}` : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
