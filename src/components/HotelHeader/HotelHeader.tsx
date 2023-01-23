import React, { useState } from "react";
import styles from "./HotelHeader.module.scss";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import StarsRating from "../StarsRating/StarsRating";

const photosData = [
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
  },
];

const hotel = {
  name: "Hotel 1 Name",
  address1: "Cwiartki 3/4",
  address2: "Murcki",
  starRating: 3,
};

const HotelHeader = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.container}>
      <PhotoCarousel photosData={photosData} />
      <div className={styles.details}>
        <h1>{hotel.name}</h1>
        <h2>{hotel.address1}</h2>
        <h2>{hotel.address2}</h2>
      </div>
      <StarsRating readOnly={true} value={hotel.starRating} />
    </div>
  );
};

export default HotelHeader;
