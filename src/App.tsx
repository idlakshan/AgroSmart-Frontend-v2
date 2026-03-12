import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./pages/HeroSection";
import { FeatureSection } from "./pages/FeatureSection";
import SoilAnalysis from "./components/SoilAnalysis";
import LearnMoreSeaction from "./pages/LearnMoreSeaction";
import { Footer } from "./components/Footer";
import CropRecommendation from "./components/CropRecommendation";
import { ToastContainer } from "react-toastify";
import AdminCrops from "./pages/AdminCrops";

function App() {
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
                <CropRecommendation />
                <LearnMoreSeaction />
              </main>

              <Footer />
            </>
          }
        />
        <Route path="/admin/crops" element={<AdminCrops />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
