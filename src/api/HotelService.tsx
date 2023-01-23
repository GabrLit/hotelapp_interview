import { BASE_URL } from "../constants";
import { HotelDataType, RoomDataType } from "../types";

export const fetchHotelData = async (): Promise<[HotelDataType[], unknown]> => {
  try {
    const response = await fetch(BASE_URL + "/hotels?collection-id=OBMNG");
    const data = await response.json();
    return [data, null];
  } catch (err) {
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    return [[], message];
  }
};

export const fetchRoomDataByHotelId = async (
  hotelId: string
): Promise<[RoomDataType[], unknown]> => {
  try {
    const response = await fetch(BASE_URL + `/roomRates/OBMNG/${hotelId}`);
    const data = await response.json();
    return [data.rooms, null];
  } catch (err) {
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    return [[], message];
  }
};
