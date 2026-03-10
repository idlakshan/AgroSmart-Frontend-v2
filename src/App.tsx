import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./pages/HeroSection";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
