import React from "react";
import styles from "./HotelItem.module.scss";
import HotelHeader from "../HotelHeader/HotelHeader";
import HotelRoom from "../HotelRoom/HotelRoom";

const rooms = [
  {
    name: "Room 1 Name",
    shortDescription:
      "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
    longDescription:
      "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes",
    maxAdults: 2,
    maxChildren: 2,
    maxOverall: 2,
  },
  {
    name: "Room 2 Name",
    shortDescription:
      "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
    longDescription:
      "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes",
    maxAdults: 2,
    maxChildren: 2,
    maxOverall: 2,
  },
  {
    name: "Room 3 Name",
    shortDescription:
      "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
    longDescription:
      "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes",
    maxAdults: 2,
    maxChildren: 2,
    maxOverall: 2,
  },
];

export const HotelItem = () => {
  return (
    <div className={styles.container}>
      <HotelHeader />
      <div className={styles.roomList}>
        {rooms.map((room) => (
          <HotelRoom room={room} />
        ))}
      </div>
    </div>
  );
};
