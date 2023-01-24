import styles from "./App.module.scss";
import Filters from "./components/Filters/Filters";
import HeroSection from "./components/HeroSection/HeroSection";
import HotelList from "./components/HotelList/HotelList";
import ErrorBar from "./components/ErrorBar/ErrorBar";
import useFilters from "./hooks/useFilters";

function App() {
  const { dataToDisplay } = useFilters();

  return (
    <div className={styles.container}>
      <ErrorBar />
      <HeroSection />
      <Filters />
      <HotelList dataToDisplay={dataToDisplay} />
    </div>
  );
}

export default App;
