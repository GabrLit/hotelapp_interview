import styles from "./HotelHeader.module.scss";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import StarsRating from "../StarsRating/StarsRating";
import { HotelDataType } from "../../types";

interface HotelHeaderProps {
  hotel: HotelDataType;
}

const HotelHeader = ({ hotel }: HotelHeaderProps) => {
  return (
    <div className={styles.container}>
      <PhotoCarousel photosData={hotel.images.map((item) => item.url)} />
      <div className={styles.details}>
        <h1>{hotel.name}</h1>
        <h2>{hotel.address1}</h2>
        <h2>{hotel.address2}</h2>
      </div>
      <StarsRating readOnly={true} value={Number(hotel.starRating)} />
    </div>
  );
};

export default HotelHeader;
