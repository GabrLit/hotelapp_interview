import Filters from "./components/Filters/Filters";
import HeroSection from "./components/HeroSection/HeroSection";

import styles from "./App.module.scss";

import HotelList from "./components/HotelList/HotelList";

function App() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <Filters />
      <HotelList />
    </div>
  );
}

export default App;
