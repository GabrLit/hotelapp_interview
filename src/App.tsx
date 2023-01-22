import "./App.module.scss";
import Filters from "./components/Filters/Filters";
import HeroSection from "./components/HeroSection/HeroSection";
import PhotoCarousel from "./components/PhotoCarousel/PhotoCarousel";

const photosData = [
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
  },
];

function App() {
  return (
    <div>
      <HeroSection />
      <Filters />
      <PhotoCarousel photosData={photosData} />
      <div style={{ height: "1500px", width: "100%" }}></div>
    </div>
  );
}

export default App;
