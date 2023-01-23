import useFilters from "../../hooks/useFilters";
import { HotelItem } from "../HotelItem/HotelItem";
import styles from "./HotelList.module.scss";

const HotelList = () => {
  const { dataToDisplay } = useFilters();

  return (
    <div className={styles.container}>
      {dataToDisplay.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
