import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MediaDetail from "./components/MediaDetail";
import Hero from "./components/Hero";
import { mockCarousels, mockTabs } from "./mockData";

/**
 * PUBLIC_INTERFACE
 * App root - implements layout, spacing, section hierarchy and passes handlers/data down.
 * Strictly matches Hotstar homepage design technical brief.
 */
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
      {/* Pixel-precise main content structure */}
      <main className="main-hotstar">
        {/* Hero/banner only at top of Home, with proper section and spacing */}
        {activeTab === "Home" && (
          <section className="section-spacing" style={{ paddingTop: 0, marginBottom: 0 }}>
            <Hero />
          </section>
        )}

        {/* Main carousels / sections, each wrapped in their own section for guaranteed vertical spacing */}
        {getCurrentCarousels().length === 0 ? (
          <section className="section-spacing" style={{ padding: "80px 0 0 0" }}>
            <div style={{
              color: "#fff",
              textAlign: "center",
              fontSize: "1.17rem"
            }}>
              No shows available in this section yet!
            </div>
          </section>
        ) : (
          getCurrentCarousels().map((carousel, i) => (
            <section className="section-spacing" key={carousel.title || i}>
              <Carousel
                title={carousel.title}
                items={carousel.items}
                onCardClick={setSelectedMedia}
              />
            </section>
          ))
        )}
      </main>
      {/* Media detail overlay modal, full screen */}
      {selectedMedia &&
        <MediaDetail item={selectedMedia} onBack={handleBack} />
      }
    </div>
  );
}

export default App;