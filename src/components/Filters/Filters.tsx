import { useContext } from "react";
import { FilterNameTypes, FiltersContext } from "../../context/FiltersContext";
import IncrementDecrement from "../IncrementDecrement/IncrementDecrement";
import StarsRating from "../StarsRating/StarsRating";
import styles from "./Filters.module.scss";

const Filters = () => {
  const {
    starRating,
    adultCount,
    childrenCount,
    onStarRatingChange,
    onIncrement,
    onDecrement,
    onChange,
  } = useContext(FiltersContext);

  return (
    <div className={styles.filters_wrapper}>
      <div className={styles.filters_container}>
        <StarsRating
          value={starRating}
          onStarRatingChange={onStarRatingChange}
        />
        <IncrementDecrement
          name={FilterNameTypes.ADULT}
          value={adultCount}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onChange={onChange}
          label={"Adults"}
        />
        <IncrementDecrement
          name={FilterNameTypes.CHILD}
          value={childrenCount}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onChange={onChange}
          label={"Children"}
        />
      </div>
    </div>
  );
};

export default Filters;
