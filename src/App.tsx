import "./App.module.scss";
import Filters from "./components/Filters/Filters";
import HeroSection from "./components/HeroSection/HeroSection";
import PhotoCarousel from "./components/PhotoCarousel/PhotoCarousel";

function App() {
  return (
    <div>
      <HeroSection />
      <Filters />
      <div style={{ height: "1500px", width: "100%" }}></div>
    </div>
  );
}

export default App;
