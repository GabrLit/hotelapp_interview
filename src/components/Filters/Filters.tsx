import { useState } from "react";
import IncrementDecrement from "../IncrementDecrement/IncrementDecrement";
import StarsRating from "../StarsRating/StarsRating";
import styles from "./Filters.module.scss";

const Filters = () => {
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <StarsRating />
        <IncrementDecrement
          value={adults}
          setValue={setAdults}
          label={"Adults"}
        />
        <IncrementDecrement
          value={children}
          setValue={setChildren}
          label={"Children"}
        />
      </div>
    </div>
  );
};

export default Filters;
