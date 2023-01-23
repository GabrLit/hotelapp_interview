import { HotelDataType, RoomDataType } from "../types";

export const adaptHotelData = (
  hotelData: HotelDataType[],
  roomData: Record<string, RoomDataType[]>
): HotelDataType[] => {
  const completeData = hotelData.map(
    ({ id, name, address1, address2, images }) => ({
      id,
      name,
      address1,
      address2,
      rooms: roomData[id].map(
        ({ id, name, occupancy, shortDescription, longDescription }) => ({
          id,
          name,
          occupancy,
          shortDescription,
          longDescription,
        })
      ),
      images,
    })
  );

  return completeData;
};
