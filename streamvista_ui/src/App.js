import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MediaDetail from "./components/MediaDetail";
import { mockCarousels, mockTabs } from "./mockData";

function App() {
  // Track active tab and modal media selection
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Decide which carousels to show based on current tab
  const getCurrentCarousels = () => {
    const tabEntry = mockTabs.find(t => t.key === activeTab);
    if (!tabEntry) return [];
    return tabEntry.carousels.map(idx => mockCarousels[idx]);
  };

  // Close media detail view
  const handleBack = () => setSelectedMedia(null);

  return (
    <div className="app-hotstar">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <div style={{ height: "56px" }} /> {/* space below navbar */}
      <main className="main-hotstar">
        {getCurrentCarousels().length === 0 ? (
          <div style={{
            color: "#fff",
            padding: "80px 0 0 0",
            textAlign: "center",
            fontSize: "1.17rem"
          }}>
            No shows available in this section yet!
          </div>
        ) : (
          getCurrentCarousels().map((carousel, i) => (
            <Carousel
              key={carousel.title || i}
              title={carousel.title}
              items={carousel.items}
              onCardClick={setSelectedMedia}
            />
          ))
        )}
      </main>
      {selectedMedia &&
        <MediaDetail item={selectedMedia} onBack={handleBack} />
      }
    </div>
  );
}

export default App;