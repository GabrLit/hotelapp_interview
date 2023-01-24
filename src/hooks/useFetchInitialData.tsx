import { adaptHotelData } from "../adapter/HotelAdapter";
import * as HotelService from "../api/HotelService";

import { useEffect, useState } from "react";
import { HotelDataType, RoomDataType } from "../types";

const useFetchInitialData = () => {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotelData, setHotelData] = useState<HotelDataType[]>([]);

  useEffect(() => {
    const asyncFn = async () => {
      const [hotelDataResponse, err] = await HotelService.fetchHotelData();
      if (err) return setError(err);

      const roomDataResponse: Record<string, RoomDataType[]> = {};

      for (const hotel of hotelDataResponse) {
        const [room, err] = await HotelService.fetchRoomDataByHotelId(hotel.id);
        if (err) return setError(err);
        roomDataResponse[hotel.id] = room;
      }

      const completeData = adaptHotelData(hotelDataResponse, roomDataResponse);
      if (completeData) {
        setHotelData(completeData);
        setIsLoaded(true);
      }
    };
    asyncFn();
  }, []);

  return { hotelData, error, isLoaded };
};

export default useFetchInitialData;
