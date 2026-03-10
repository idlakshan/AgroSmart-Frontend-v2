import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./pages/HeroSection";
import { FeatureSection } from "./pages/FeatureSection";
import SoilAnalysis from "./pages/SoilAnalysis";

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
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
