import styles from "./HotelRoom.module.scss";
import { useMediaQuery } from "usehooks-ts";
import { RoomDataType } from "../../types";

interface HotelRoomProps {
  room: RoomDataType;
}

const HotelRoom = ({ room }: HotelRoomProps) => {
  const matches = useMediaQuery("(max-width: 550px)");

  return (
    <div className={styles.hotelRoom_container}>
      <div className={styles.hotelRoom_roomDetails}>
        <h3>{room.name}</h3>
        <h4>Adults: {room.occupancy.maxAdults}</h4>
        <h4>Children: {room.occupancy.maxChildren}</h4>
      </div>
      <div className={styles.hotelRoom_description}>
        <p>{matches ? room.shortDescription : room.longDescription}</p>
      </div>
    </div>
  );
};

export default HotelRoom;
