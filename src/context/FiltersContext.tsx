import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface FiltersContextType {
  starRating: number;
  adultCount: number;
  childrenCount: number;
  setStarRating: Dispatch<SetStateAction<number>>;
  setAdultCount: Dispatch<SetStateAction<number>>;
  setChildrenCount: Dispatch<SetStateAction<number>>;
}

export const FiltersContext = createContext({} as FiltersContextType);

const FiltersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [starRating, setStarRating] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  return (
    <FiltersContext.Provider
      value={{
        starRating,
        adultCount,
        childrenCount,
        setStarRating,
        setAdultCount,
        setChildrenCount,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
