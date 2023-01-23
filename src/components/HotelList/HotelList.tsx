import React from "react";
import useFilters from "../../hooks/useFilters";
import { HotelItem } from "../HotelItem/HotelItem";
import styles from "./HotelList.module.scss";

const HotelList = () => {
  const { dataToDisplay } = useFilters();
  console.log(dataToDisplay);

  return (
    <div className={styles.container}>
      <HotelItem />
    </div>
  );
};

export default HotelList;
