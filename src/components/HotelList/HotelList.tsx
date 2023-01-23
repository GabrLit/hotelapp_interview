import React from "react";
import { HotelItem } from "../HotelItem/HotelItem";
import styles from "./HotelList.module.scss";

const HotelList = () => {
  return (
    <div className={styles.container}>
      <HotelItem />
    </div>
  );
};

export default HotelList;
