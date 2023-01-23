import styles from "./App.module.scss";
import Filters from "./components/Filters/Filters";
import HeroSection from "./components/HeroSection/HeroSection";
import HotelList from "./components/HotelList/HotelList";
import ErrorBar from "./components/ErrorBar/ErrorBar";

function App() {
  return (
    <div className={styles.container}>
      <ErrorBar />
      <HeroSection />
      <Filters />
      <HotelList />
    </div>
  );
}

export default App;
