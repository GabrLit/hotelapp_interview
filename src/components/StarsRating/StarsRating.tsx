import { Rating } from "@mui/material";

interface StarsRatingProps {
  value: number;
  readOnly?: boolean;
  onStarRatingChange?: (rating: number) => void;
}

const StarsRating = ({
  readOnly = false,
  value,
  onStarRatingChange,
}: StarsRatingProps) => {
  return (
    <Rating
      name="hover-feedback"
      value={value}
      size="large"
      readOnly={readOnly}
      onChange={(_, newValue) =>
        onStarRatingChange && onStarRatingChange(newValue as number)
      }
    />
  );
};

export default StarsRating;
