import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export enum FilterNameTypes {
  ADULT = "adult",
  CHILD = "child",
}

export interface FiltersContextType {
  starRating: number;
  adultCount: number;
  childrenCount: number;
  onStarRatingChange: (rating: number) => void;
  onIncrement: (name: FilterNameTypes) => void;
  onDecrement: (name: FilterNameTypes) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: FilterNameTypes
  ) => void;
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

  const stateMap: Record<
    FilterNameTypes,
    { var: number; set: Dispatch<SetStateAction<number>> }
  > = {
    adult: { var: adultCount, set: setAdultCount },
    child: { var: childrenCount, set: setChildrenCount },
  };

  const onStarRatingChange = (rating: number) => setStarRating(rating);

  const onIncrement = (name: FilterNameTypes) =>
    stateMap[name].set((prev) => prev + 1);

  const onDecrement = (name: FilterNameTypes) =>
    stateMap[name].var > 0 && stateMap[name].set((prev) => prev - 1);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: FilterNameTypes
  ) => {
    if (e.target.value === "") stateMap[name].set(0);
    stateMap[name].set(Number(e.target.value.replace(/\D/g, "")));
  };

  return (
    <FiltersContext.Provider
      value={{
        starRating,
        adultCount,
        childrenCount,
        onStarRatingChange,
        onChange,
        onIncrement,
        onDecrement,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
