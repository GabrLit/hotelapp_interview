import React from "react";
import styles from "./HotelRoom.module.scss";
import { useMediaQuery } from "usehooks-ts";

interface HotelRoom {
  name: string;
  longDescription: string;
  shortDescription: string;
  maxAdults: number;
  maxChildren: number;
}

interface HotelRoomProps {
  room: HotelRoom;
}

const HotelRoom = ({ room }: HotelRoomProps) => {
  const matches = useMediaQuery("(max-width: 550px)");

  return (
    <div className={styles.container}>
      <div className={styles.roomDetails}>
        <h3>{room.name}</h3>
        <h4>Adults: {room.maxAdults}</h4>
        <h4>Children: {room.maxChildren}</h4>
      </div>
      <div className={styles.description}>
        <p>{matches ? room.shortDescription : room.longDescription}</p>
      </div>
    </div>
  );
};

export default HotelRoom;
