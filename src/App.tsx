import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./pages/HeroSection";
import { FeatureSection } from "./pages/FeatureSection";
import SoilAnalysis from "./pages/SoilAnalysis";
import LearnMoreSeaction from "./pages/LearnMoreSeaction";
import { Footer } from "./components/Footer";
import CropRecommendation from "./components/CropRecommendation";
import type { CropDetails } from "./redux/features/crop/cropApi";

function App() {
  const handleCropClick = (crop: CropDetails) => {
    alert(`You clicked on ${crop.name}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <main className="grow">
                <SoilAnalysis />
                <CropRecommendation onCropClick={handleCropClick} />
                <LearnMoreSeaction />
              </main>

              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
