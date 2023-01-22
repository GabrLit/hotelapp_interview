import { Rating } from "@mui/material";
import { useState } from "react";

const StarsRating = () => {
  const [value, setValue] = useState(0);

  return (
    <Rating
      name="hover-feedback"
      value={value}
      onChange={(_, newValue) => {
        alert(newValue);
        setValue(newValue as number);
      }}
    />
  );
};

export default StarsRating;
