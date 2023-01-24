import { HotelItem } from "../HotelItem/HotelItem";
import styles from "./HotelList.module.scss";
import { HotelDataType } from "../../types";
import { notFoundMsg } from "../../constants";
import { CircularProgress } from "@mui/material";

interface HotelListProps {
  dataToDisplay: HotelDataType[];
  isLoaded: boolean;
}

const HotelList = ({ dataToDisplay, isLoaded }: HotelListProps) => {
  if (!isLoaded)
    return <CircularProgress className={styles.hotelList_noDataContainer} />;
  return (
    <div className={styles.hotelList_container}>
      {!dataToDisplay.length && (
        <div className={styles.hotelList_noDataContainer}>{notFoundMsg}</div>
      )}

      {Boolean(dataToDisplay.length) &&
        dataToDisplay.map((hotel) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
    </div>
  );
};

export default HotelList;
