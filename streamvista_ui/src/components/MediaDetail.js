import React from "react";
import "./MediaDetail.css";

// PUBLIC_INTERFACE
function MediaDetail({ item, onBack }) {
  if (!item) return null;

  return (
    <div className="media-detail-backdrop">
      <div className="media-detail-container">
        <button className="media-detail-back" onClick={onBack}>&larr; Back</button>
        <div className="media-detail-header">
          <img className="media-detail-image" src={item.image} alt={item.title} />
          <div className="media-detail-meta">
            <h1 className="media-detail-title">{item.title}</h1>
            <div className="media-detail-genres">
              {item.genres?.join(", ")}
            </div>
            <div className="media-detail-cast">
              <strong>Cast:</strong> {item.cast?.join(", ")}
            </div>
            <div className="media-detail-description">{item.description}</div>
            <button className="media-detail-play">► Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaDetail;
