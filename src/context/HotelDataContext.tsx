import React, { createContext } from "react";
import { HotelDataType } from "../types";
import useFetchInitialData from "../hooks/useFetchInitialData";

interface HotelContextType {
  error: string;
  hotelData: HotelDataType[];
}

export const HotelDataContext = createContext({} as HotelContextType);

const HotelDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { error, hotelData } = useFetchInitialData();

  return (
    <HotelDataContext.Provider value={{ error, hotelData }}>
      {children}
    </HotelDataContext.Provider>
  );
};

export default HotelDataContextProvider;
