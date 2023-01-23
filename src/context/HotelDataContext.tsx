import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "./FiltersContext";
import * as HotelService from "../api/HotelService";
import { adaptHotelData } from "../adapter/HotelAdapter";
import { HotelDataType, RoomDataType } from "../types";

const HotelDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [error, setError] = useState("");
  const [hotelData, setHotelData] = useState<HotelDataType[]>();

  const { adultCount } = useContext(FiltersContext);

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

  return <div>{children}</div>;
};

export default HotelDataContextProvider;
