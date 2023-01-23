import { Rating } from "@mui/material";
import React from "react";

interface StarsRatingProps {
  value: number;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
  readOnly?: boolean;
}

const StarsRating = ({
  readOnly = false,
  value,
  setValue,
}: StarsRatingProps) => {
  return (
    <Rating
      name="hover-feedback"
      value={value}
      size="large"
      readOnly={readOnly}
      onChange={(_, newValue) => {
        setValue && setValue(newValue as number);
      }}
    />
  );
};

export default StarsRating;
