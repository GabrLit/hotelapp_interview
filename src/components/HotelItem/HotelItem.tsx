import styles from "./HotelItem.module.scss";
import HotelHeader from "../HotelHeader/HotelHeader";
import HotelRoom from "../HotelRoom/HotelRoom";
import { HotelDataType } from "../../types";

interface HotelItemProps {
  hotel: HotelDataType;
}

export const HotelItem = ({ hotel }: HotelItemProps) => {
  return (
    <div className={styles.hotelItem_container}>
      <HotelHeader hotel={hotel} />
      {hotel.rooms.map((room) => (
        <HotelRoom key={room.id} room={room} />
      ))}
    </div>
  );
};
