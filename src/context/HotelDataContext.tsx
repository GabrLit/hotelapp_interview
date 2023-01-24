import React, { createContext } from "react";
import { HotelDataType } from "../types";
import useFetchInitialData from "../hooks/useFetchInitialData";

interface HotelContextType {
  error: string;
  hotelData: HotelDataType[];
  isLoaded: boolean;
}

export const HotelDataContext = createContext({} as HotelContextType);

const HotelDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { error, hotelData, isLoaded } = useFetchInitialData();

  return (
    <HotelDataContext.Provider value={{ error, hotelData, isLoaded }}>
      {children}
    </HotelDataContext.Provider>
  );
};

export default HotelDataContextProvider;
