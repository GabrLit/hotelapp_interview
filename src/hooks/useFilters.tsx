import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { HotelDataContext } from "../context/HotelDataContext";

function useFilters() {
  const { hotelData } = useContext(HotelDataContext);
  const { adultCount, childrenCount, starRating } = useContext(FiltersContext);

  let dataToDisplay = [...hotelData];

  if (starRating)
    dataToDisplay = dataToDisplay.filter(
      (hotel) => Number(hotel.starRating) >= starRating
    );

  dataToDisplay = dataToDisplay.map((hotel) => ({
    ...hotel,
    rooms: hotel.rooms.filter(
      (room) =>
        room.occupancy.maxAdults >= adultCount &&
        room.occupancy.maxChildren >= childrenCount
    ),
  }));

  dataToDisplay = dataToDisplay.filter((hotel) => hotel.rooms.length > 0);

  return { dataToDisplay };
}

export default useFilters;
