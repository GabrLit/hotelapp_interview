import { adaptHotelData } from "../adapter/HotelAdapter";
import * as HotelService from "../api/HotelService";

import { useEffect, useState } from "react";
import { HotelDataType, RoomDataType } from "../types";

const useFetchInitialData = () => {
  const [error, setError] = useState("");
  const [hotelData, setHotelData] = useState<HotelDataType[]>([]);

  useEffect(() => {
    const asyncFn = async () => {
      const [hotelDataResponse, err] = await HotelService.fetchHotelData();
      if (err) return setError(err as string);

      const roomDataResponse: Record<string, RoomDataType[]> = {};
      for (const hotel of hotelDataResponse) {
        const [room, err] = await HotelService.fetchRoomDataByHotelId(hotel.id);
        if (err) return setError(err as string);
        roomDataResponse[hotel.id] = room;
      }

      const completeData = adaptHotelData(hotelDataResponse, roomDataResponse);
      if (completeData) setHotelData(completeData);
    };
    asyncFn();
  }, []);

  return { hotelData, error };
};

export default useFetchInitialData;
