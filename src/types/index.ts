export interface RoomDataType {
  id: string;
  name: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  shortDescription: string;
  longDescription: string;
}

export interface HotelDataType {
  id: string;
  name: string;
  address1: string;
  address2: string;
  rooms: RoomDataType[];
  images: { url: string }[];
}
