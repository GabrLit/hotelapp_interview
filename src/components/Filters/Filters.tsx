import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import IncrementDecrement from "../IncrementDecrement/IncrementDecrement";
import StarsRating from "../StarsRating/StarsRating";
import styles from "./Filters.module.scss";

const Filters = () => {
  const {
    starRating,
    adultCount,
    childrenCount,
    setStarRating,
    setAdultCount,
    setChildrenCount,
  } = useContext(FiltersContext);

  return (
    <div className={styles.filters_wrapper}>
      <div className={styles.filters_container}>
        <StarsRating value={starRating} setValue={setStarRating} />
        <IncrementDecrement
          value={adultCount}
          setValue={setAdultCount}
          label={"Adults"}
        />
        <IncrementDecrement
          value={childrenCount}
          setValue={setChildrenCount}
          label={"Children"}
        />
      </div>
    </div>
  );
};

export default Filters;
