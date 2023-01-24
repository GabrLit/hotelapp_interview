import { HotelItem } from "../HotelItem/HotelItem";
import styles from "./HotelList.module.scss";
import { HotelDataType } from "../../types";

interface HotelListProps {
  dataToDisplay: HotelDataType[];
}

const HotelList = ({ dataToDisplay }: HotelListProps) => {
  return (
    <div className={styles.container}>
      {dataToDisplay.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
